export default function WireframeTaskView() {
  return (
    <div className="w-full bg-white rounded-lg border-2 border-gray-300 p-6 font-mono">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-gray-300">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-20 h-6 bg-gray-300 rounded"></div>
            <div className="h-8 px-4 bg-gray-200 border-2 border-gray-400 rounded flex items-center">
              <span className="text-gray-700 text-sm">Remove weld drains</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="w-8 h-8 bg-gray-200 border-2 border-gray-400 rounded"></div>
          ))}
        </div>
      </div>

      {/* Info Row */}
      <div className="grid grid-cols-8 gap-3 mb-6 pb-4 border-b border-gray-300">
        {[
          { label: 'Size', value: 'Acc-01' },
          { label: 'Equipment', value: 'Accordition' },
          { label: 'Priority', value: 'Low' },
          { label: 'Schedule', value: 'Today 8:30-15:30' },
          { label: 'Assignment', value: 'Audrey Russell' },
          { label: 'Planned', value: '-' },
          { label: 'Block Type', value: 'CTU (Clean Team Unit)' },
          { label: 'Workpackage', value: '05946_876' }
        ].map((item, i) => (
          <div key={i}>
            <div className="text-[10px] text-gray-500 mb-1">{item.label}</div>
            <div className="text-xs text-gray-700 truncate">{item.value}</div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-6 mb-6 border-b border-gray-300">
        {['OVERVIEW', 'TIMELINE', 'GANTT', 'EXECUTION', 'ISSUES', 'FILES'].map((tab, i) => (
          <div
            key={tab}
            className={`pb-2 text-xs ${
              i === 0
                ? 'border-b-2 border-blue-400 text-blue-600'
                : 'text-gray-500'
            }`}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-12 gap-4 mb-3 px-4 pb-2 border-b border-gray-300">
        <div className="col-span-4 text-[10px] text-gray-500 uppercase">Task</div>
        <div className="col-span-2 text-[10px] text-gray-500 uppercase">Value</div>
        <div className="col-span-2 text-[10px] text-gray-500 uppercase">Step Type</div>
        <div className="col-span-2 text-[10px] text-gray-500 uppercase">Time Stamp</div>
        <div className="col-span-1 text-[10px] text-gray-500 uppercase">Employee</div>
        <div className="col-span-1 text-[10px] text-gray-500 uppercase text-right">Actions</div>
      </div>

      {/* Table Rows - Wireframe Style */}
      <div className="space-y-3">
        {/* Row 1 - Validation Checks (Collapsed) */}
        <div className="px-4 py-3 bg-gray-50 rounded border border-gray-300">
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-4 flex items-center gap-2">
              <div className="w-3 h-3 border-2 border-gray-400 rounded-sm"></div>
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              <span className="text-xs text-gray-700">VALIDATION CHECKS</span>
            </div>
            <div className="col-span-8"></div>
          </div>
        </div>

        {/* Row 2 - Packaging controls */}
        <div className="px-4 py-3 hover:bg-gray-50 rounded border border-transparent hover:border-gray-300 transition-colors">
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-4 flex items-center gap-2 pl-6">
              <div className="w-3 h-3 border-2 border-gray-400 rounded-sm"></div>
              <span className="text-xs text-gray-700">Packaging controls</span>
            </div>
            <div className="col-span-2"></div>
            <div className="col-span-2"></div>
            <div className="col-span-2"></div>
            <div className="col-span-1"></div>
            <div className="col-span-1 flex justify-end">
              <div className="px-2 py-1 bg-gray-700 text-white text-[10px] rounded">COMPLETE</div>
            </div>
          </div>
        </div>

        {/* Row 3 - Fault report */}
        <div className="px-4 py-3 hover:bg-gray-50 rounded border border-transparent hover:border-gray-300 transition-colors">
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-4 flex items-center gap-2 pl-6">
              <div className="w-3 h-3 border-2 border-gray-400 rounded-sm"></div>
              <span className="text-xs text-gray-700">Fault report - general data</span>
            </div>
            <div className="col-span-2"></div>
            <div className="col-span-2"></div>
            <div className="col-span-2">
              <div className="text-[10px] text-gray-600">4/26/2023 4:55:17 PM</div>
            </div>
            <div className="col-span-1">
              <div className="text-[10px] text-gray-600">Audrey Russell</div>
            </div>
            <div className="col-span-1 flex justify-end gap-1">
              <div className="w-6 h-6 border border-blue-400 rounded"></div>
            </div>
          </div>
        </div>

        {/* Row 4 - Batch number */}
        <div className="px-4 py-3 hover:bg-gray-50 rounded border border-transparent hover:border-gray-300 transition-colors">
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-4 flex items-center gap-2 pl-6">
              <div className="w-3 h-3 border-2 border-gray-400 rounded-sm"></div>
              <span className="text-xs text-gray-700">Batch number</span>
            </div>
            <div className="col-span-2">
              <div className="h-4 bg-gray-200 rounded w-24"></div>
            </div>
            <div className="col-span-2">
              <div className="h-4 bg-gray-200 rounded w-20"></div>
            </div>
            <div className="col-span-2">
              <div className="text-[10px] text-gray-600">22-850-235-97</div>
            </div>
            <div className="col-span-1">
              <div className="text-[10px] text-gray-600">Audrey Russell</div>
            </div>
            <div className="col-span-1"></div>
          </div>
        </div>

        {/* Row 5 - Name of preparation */}
        <div className="px-4 py-3 hover:bg-gray-50 rounded border border-transparent hover:border-gray-300 transition-colors">
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-4 flex items-center gap-2 pl-6">
              <div className="w-3 h-3 border-2 border-gray-400 rounded-sm"></div>
              <span className="text-xs text-gray-700">Name of the preparation</span>
            </div>
            <div className="col-span-2">
              <div className="h-4 bg-gray-200 rounded w-20"></div>
            </div>
            <div className="col-span-2">
              <div className="h-4 bg-gray-200 rounded w-32"></div>
            </div>
            <div className="col-span-2">
              <div className="text-[10px] text-gray-600">9/2/2023 4:55 PM</div>
            </div>
            <div className="col-span-1">
              <div className="text-[10px] text-gray-600">Audrey Russell</div>
            </div>
            <div className="col-span-1"></div>
          </div>
        </div>

        {/* Row 6 - Section 3 */}
        <div className="px-4 py-3 hover:bg-gray-50 rounded border border-transparent hover:border-gray-300 transition-colors">
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-4 flex items-center gap-2 pl-6">
              <div className="w-3 h-3 border-2 border-gray-400 rounded-sm"></div>
              <span className="text-xs text-gray-700">Section 3</span>
            </div>
            <div className="col-span-2">
              <div className="h-4 bg-gray-200 rounded w-20"></div>
            </div>
            <div className="col-span-2">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
            </div>
            <div className="col-span-2">
              <div className="text-[10px] text-gray-600">1/2/2024 4:56 PM</div>
            </div>
            <div className="col-span-1">
              <div className="text-[10px] text-gray-600">Audrey Russell</div>
            </div>
            <div className="col-span-1 flex justify-end gap-1">
              <div className="w-6 h-6 border border-blue-400 rounded"></div>
            </div>
          </div>
        </div>

        {/* More rows - simplified */}
        {[
          'Packaging canisters (2)',
          'Packaging canisters (3)',
          'Calculation of weighing range',
          'Quality controls QA'
        ].map((task, i) => (
          <div key={i} className="px-4 py-3 hover:bg-gray-50 rounded border border-transparent hover:border-gray-300 transition-colors">
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-4 flex items-center gap-2 pl-6">
                <div className="w-3 h-3 border-2 border-gray-400 rounded-sm"></div>
                <span className="text-xs text-gray-700">{task}</span>
              </div>
              <div className="col-span-8"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
