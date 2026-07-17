import { motion } from "framer-motion";

import DashboardLayout from "../components/layout/DashboardLayout";

import HistoryHeader from "../components/history/HistoryHeader";
import HistoryStats from "../components/history/HistoryStats";
import HistoryFilters from "../components/history/HistoryFilters";
import ComplaintHistoryTable from "../components/history/ComplaintHistoryTable";
import ComplaintHistoryCard from "../components/history/ComplaintHistoryCard";
import HistoryPagination from "../components/history/HistoryPagination";
import EmptyHistory from "../components/history/EmptyHistory";

export default function ComplaintHistory() {

  // Replace this with API data later

  const hasComplaints = true;

  return (

    <DashboardLayout>

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.4,
        }}
        className="space-y-8"
      >

        {/* ================================= */}

        {/* Header */}

        {/* ================================= */}

        <HistoryHeader />

        {/* ================================= */}

        {/* Stats */}

        {/* ================================= */}

        <HistoryStats />

        {/* ================================= */}

        {/* Filters */}

        {/* ================================= */}

        <HistoryFilters />

        {/* ================================= */}

        {/* Complaint History */}

        {/* ================================= */}

        {hasComplaints ? (

          <>

            {/* Desktop */}

            <div className="hidden lg:block">

              <ComplaintHistoryTable />

            </div>

            {/* Mobile */}

            <ComplaintHistoryCard />
                        {/* Pagination */}

            <HistoryPagination />

          </>

        ) : (

          <EmptyHistory />

        )}

      </motion.div>

    </DashboardLayout>

  );

}