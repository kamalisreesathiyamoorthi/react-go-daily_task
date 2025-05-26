import { Button, Flex, Input, Spinner } from "@chakra-ui/react";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { BASE_URL } from "../App";

const TodoForm = () => {
	const [newTodo, setNewTodo] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);
	const queryClient = useQueryClient();

	useEffect(() => {
		inputRef.current?.focus();
	}, []);

	const { mutate: createTodo, isPending: isCreating } = useMutation({
		mutationKey: ['createTodo'],
		mutationFn: async (e: React.FormEvent) => {
			e.preventDefault();
			const res = await fetch(BASE_URL + `/todos`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ body: newTodo })
			});
			const data = await res.json();
			if (!res.ok) throw new Error(data.error || "Something went wrong!");
			setNewTodo("");
			return data;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["todos"] });
		},
		onError: (error: any) => {
			alert(error.message);
		}
	});

	return (
		<form onSubmit={(e) => createTodo(e)}>
			<Flex gap={2}>
				<Input
					type='text'
					value={newTodo}
					onChange={(e) => setNewTodo(e.target.value)}
					ref={inputRef}
				/>
				<Button mx={2} type='submit' _active={{ transform: "scale(.97)" }}>
					{isCreating ? <Spinner size="xs" /> : <IoMdAdd size={30} />}
				</Button>
			</Flex>
		</form>
	);
};

export default TodoForm;
