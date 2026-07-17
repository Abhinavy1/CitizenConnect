import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import complaintCategories from "../../data/complaintCategories";

export default function CategoryStep({
  formData,
  setFormData,
  nextStep,
}) {
  const [search, setSearch] = useState("");

  const filteredCategories = useMemo(() => {
    if (!search.trim()) return complaintCategories;

    return complaintCategories
      .map((category) => ({
        ...category,
        items: category.items.filter((item) =>
          item.toLowerCase().includes(search.toLowerCase())
        ),
      }))
      .filter((category) => category.items.length > 0);
  }, [search]);

  const handleSelect = (group, item) => {
    setFormData((prev) => ({
      ...prev,
      categoryGroup: group,
      category: item,
    }));
  };

  return (
    <div className="space-y-8">

      {/* Header */}

      <div>

        <h2 className="text-4xl font-black text-white">

          Choose Complaint Category

        </h2>

        <p className="mt-3 text-slate-400">

          Select the category that best matches your issue.

        </p>

      </div>

      {/* Search */}

      <div className="relative">

        <Search
          size={20}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500"
        />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search category..."
          className="
            w-full
            rounded-2xl
            border
            border-white/10
            bg-slate-900
            py-4
            pl-14
            pr-5
            text-white
            outline-none
            transition
            focus:border-cyan-500
          "
        />

      </div>

      {/* Categories */}

      <div className="space-y-10">

        {filteredCategories.map((group) => {

          const Icon = group.icon;

          return (

            <div key={group.id}>

              {/* Category Header */}

              <div className="mb-5 flex items-center gap-4">

                <div
                  className={`
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    ${group.color}
                  `}
                >

                  <Icon
                    size={26}
                    className="text-white"
                  />

                </div>

                <div>

                  <h3 className="text-2xl font-bold text-white">

                    {group.title}

                  </h3>

                  <p className="text-slate-400">

                    Select one option below

                  </p>

                </div>

              </div>

              {/* Items */}

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">

                {group.items.map((item) => {

                  const active =
                    formData.category === item;

                  return (

                    <motion.button
                      whileHover={{
                        y: -5,
                      }}
                      whileTap={{
                        scale: 0.97,
                      }}
                      key={item}
                      onClick={() =>
                        handleSelect(group.title, item)
                      }
                      className={`
                        rounded-2xl
                        border
                        p-5
                        text-left
                        transition-all
                        duration-300

                        ${
                          active
                            ? "border-cyan-500 bg-cyan-500/10"
                            : "border-white/10 bg-slate-900 hover:border-cyan-500"
                        }
                      `}
                    >

                      <h4
                        className={`
                          text-lg
                          font-semibold

                          ${
                            active
                              ? "text-cyan-400"
                              : "text-white"
                          }
                        `}
                      >

                        {item}

                      </h4>

                      <p className="mt-2 text-sm text-slate-400">

                        AI will automatically assign
                        the correct department.

                      </p>

                    </motion.button>

                  );

                })}

              </div>

            </div>

          );

        })}

      </div>

      {/* Footer */}

      <div className="flex justify-end border-t border-white/10 pt-8">

        <button
          disabled={!formData.category}
          onClick={nextStep}
          className="
            rounded-2xl
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            px-8
            py-4
            font-semibold
            text-white
            transition
            hover:scale-105
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          Continue
        </button>

      </div>

    </div>
  );
}