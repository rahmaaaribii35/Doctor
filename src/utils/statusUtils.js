export const getStatusColor = (status) => {
    switch(status) {
      case 'blue': return 'bg-blue-500'
      case 'yellow': return 'bg-yellow-500'
      case 'red': return 'bg-red-500'
      case 'grey': return 'bg-gray-400'
      default: return 'bg-gray-400'
    }
  }
  