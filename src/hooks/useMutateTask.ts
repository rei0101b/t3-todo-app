import useStore from "../store";
import { trpc } from "../utils/trpc";

export const useMutateTask = () => {
  const utils = trpc.useContext()
  const reset = useStore((state)=> state.resetEditedTask)

  const createTasksMutation = trpc.todo.createTask.useMutation({
    onSuccess: (res) => {
      const previousTodos = utils.todo.getTasks.getData()
      if (previousTodos) {
        utils.todo.getTasks.setData([res, ...previousTodos])
      }
      reset()
    }
  })
  const updateTasksMutation = trpc.todo.updateTask.useMutation({
    onSuccess: (res) => {
      const previousTodos = utils.todo.getTasks.getData()
      if (previousTodos) {
        utils.todo.getTasks.setData(
          previousTodos.map((task) => (task.id === res.id ? res : task))
        )
      }
      reset()
    }
  })
  const deleteTasksMutation = trpc.todo.deleteTask.useMutation({
    onSuccess: (_, variables) => {
      const previousTodos = utils.todo.getTasks.getData()
      if (previousTodos) {
        utils.todo.getTasks.setData(
          previousTodos.filter((task) => (task.id !== variables.taskId))
        )
      }
      reset()
    }
  })

  return {createTasksMutation, updateTasksMutation, deleteTasksMutation}
}