export default function TaskCard({ task, onToggle, onDelete }) {
    return (
      <div className={`p-4 border rounded-lg shadow-sm ${
        task.completed ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200'
      }`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle(task.id)}
              className="w-4 h-4 text-blue-600"
            />
            <span className={task.completed ? 'line-through text-gray-500' : 'text-gray-900'}>
              {task.title}
            </span>
          </div>
          <button
            onClick={() => onDelete(task.id)}
            className="text-red-500 hover:text-red-700 px-2 py-1"
          >
            Delete
          </button>
        </div>
        {task.description && (
          <p className="mt-2 text-sm text-gray-600 ml-7">
            {task.description}
          </p>
        )}
      </div>
    );
  }