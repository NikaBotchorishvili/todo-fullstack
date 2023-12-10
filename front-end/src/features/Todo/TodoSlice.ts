import { apiSlice } from "../../app/api/apiSlice";

type Todo = {
	_id: string;
	user: string;
	title: string;
	completed: boolean;
};
export const todoSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getTodosByUser: builder.query<{ todos: Todo[] }, {userId: string, state?: string}>({
			query: ({userId, state}) => ({
				url: `/todos/user/${userId}`,
				params: {
					state: state,
				},
				method: "GET",
				credentials: "omit",
			}),
			providesTags: ["Todos"],
		}),
		postTodoByUser: builder.mutation<void, Omit<Todo, "id">>({
			query: (todo) => ({
				url: `/todos/user/${todo.user}`,
				method: "POST",
				body: todo,
				credentials: "omit",
			}),
			invalidatesTags: ["Todos"],
		}),
		patchTodo: builder.mutation<void, Omit<Todo, "user">>({
			query: (todo) => ({
				url: `/todos/user/${todo._id}`,
				method: "PATCH",
				body: todo,
				credentials: "omit",
			}),
			invalidatesTags: ["Todos"],
		}),
		deleteTodo: builder.mutation<void, string>({
			query: (id) => ({
				url: `/todos/${id}`,
				method: "DELETE",
				body: id,
				credentials: "omit",
			}),
			invalidatesTags: ["Todos"],
		}),
		deleteCompleted: builder.mutation<void, string>({
			query: userId => ({
				url: `/todos/user/completed/${userId}`,
				method: "DELETE",
				body: userId,
				credentials: "omit"
			}),
			invalidatesTags: ["Todos"]
		})
	}),
});

export const {
	useGetTodosByUserQuery,
	usePostTodoByUserMutation,
	usePatchTodoMutation,
	useDeleteTodoMutation,
	useDeleteCompletedMutation,
} = todoSlice;
