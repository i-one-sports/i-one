import React from 'react'

const COLUMNS = [
  'Applicant',
  'ID Type',
  'Documents',
  'Submitted',
  'Status',
] as const

const VerificationTableHeader: React.FC = () => (
  <thead>
    <tr className="border-b border-slate-100 bg-slate-50/60 text-xs uppercase tracking-wide text-slate-400">
      {COLUMNS.map(col => (
        <th key={col} className="px-5 py-3.5 font-semibold">
          {col}
        </th>
      ))}
      <th className="px-5 py-3.5 text-right font-semibold">Action</th>
    </tr>
  </thead>
)

export default VerificationTableHeader
