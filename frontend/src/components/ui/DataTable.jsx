import { ArrowUpDown } from "lucide-react";
import Badge from "./Badge";
import EmptyState from "./EmptyState";

function DataTable({
  columns = [],
  data = [],
  loading = false,
  emptyTitle = "No Data Found",
  emptyDescription = "Nothing to display.",
}) {
  if (loading) {
    return (
      <div className="rounded-3xl border border-slate-700 bg-slate-900 p-10 text-center text-slate-400">
        Loading...
      </div>
    );
  }

  if (!data.length) {
    return (
      <EmptyState
        title={emptyTitle}
        description={emptyDescription}
      />
    );
  }

  return (
    <div className="overflow-x-auto rounded-3xl border border-slate-700 bg-slate-900 shadow-xl">

      <table className="w-full">

        <thead className="bg-slate-800">

          <tr>

            {columns.map((column) => (

              <th
                key={column.key}
                className="px-6 py-4 text-left text-sm font-semibold text-slate-300"
              >

                <div className="flex items-center gap-2">

                  {column.label}

                  {column.sortable && (
                    <ArrowUpDown
                      size={16}
                      className="text-slate-500"
                    />
                  )}

                </div>

              </th>

            ))}

          </tr>

        </thead>

        <tbody>

          {data.map((row, rowIndex) => (

            <tr
              key={rowIndex}
              className="border-t border-slate-800 hover:bg-slate-800/40 transition"
            >

              {columns.map((column) => {

                const value = row[column.key];

                if (column.type === "badge") {
                  return (
                    <td
                      key={column.key}
                      className="px-6 py-5"
                    >
                      <Badge
                        variant={
                          value === "Resolved"
                            ? "success"
                            : value === "Pending"
                            ? "warning"
                            : value === "Rejected"
                            ? "danger"
                            : "primary"
                        }
                      >
                        {value}
                      </Badge>
                    </td>
                  );
                }

                if (column.render) {
                  return (
                    <td
                      key={column.key}
                      className="px-6 py-5 text-slate-300"
                    >
                      {column.render(row)}
                    </td>
                  );
                }

                return (
                  <td
                    key={column.key}
                    className="px-6 py-5 text-slate-300"
                  >
                    {value}
                  </td>
                );

              })}

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default DataTable;