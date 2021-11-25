import React, {useEffect} from 'react';
import './TodoList.scss'
import {TodoCards} from "../components/TodoCards";
import {usePerformerActions} from "../../../hooks/usePerformerActions";
import {useTodosActionsCreators} from "../../../hooks/useTdosActionsCreators";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {Layout} from "antd";
import {CheckIsLoading} from "../../../utils/helpers/checkIsLoading";
import {TodosService} from "../../../services/TodosService";
import {
    ChangePerformerTodoInterface,
    EditTodoInterface,
    CreateTodoInterface,
    ChangeStateTodoInterface, NewTodo,
} from "./TodoList.interface";
import {useTodosActions} from "../../../hooks/useTdosActions";
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import {Todo} from "../../../interfaces/todo";
import {ResultRequest} from "../../../components/ResultRequest";

const {Content,Header} = Layout;
const antIcon = <LoadingOutlined style={{ fontSize: 70 }} spin />;

export const TodoList: React.FC = () => {
    const {fetchPerformers} = usePerformerActions();
    const {fetchTodos} = useTodosActionsCreators();
    const {
        SetTodoTask,
        setStateTodo,
        setPerformerTodo,
        DeleteTodoTask,
        CreateTodo
    } = useTodosActions()

    const {
        performers,
        loading: performersLoading,
        error: performersError
    } = useTypedSelector(state => state.performers);
    const {todos,
        loading: todosLoading,
        error: todosError
    } = useTypedSelector(state => state.todos);


    const editTodo = async ({todo, task, taskTitle}: EditTodoInterface): Promise<string | true> => {
        const newTodo = todo;
        let isSuccess = false;
        let reqError = '';

        newTodo.task = task;
        newTodo.taskTitle = taskTitle;

        await TodosService.setTodo(newTodo)
            .then((response) => {
                isSuccess = true;
                SetTodoTask({
                    id: response.id,
                    task: response.task!,
                    taskTitle: response.taskTitle!,
                })
            })
            .catch(error => reqError = error)

        return isSuccess ? isSuccess : reqError;
    }

    const changeStateTodo = async ({todoId, todoStatus}: ChangeStateTodoInterface) => {
        setStateTodo({state: todoStatus, id: todoId});
        const arrOfOnceTodo = todos.find((item) => item.id === todoId);
        arrOfOnceTodo!.state = todoStatus;
        await TodosService.setTodo(arrOfOnceTodo!);
    }

    const changePerformerTodo = async ({todoId, performerId, performer}: ChangePerformerTodoInterface) => {
        setPerformerTodo({id: todoId, performerId, performer})
        const todo = todos.find((item) => item.id === todoId);
        todo!.performer = performer;
        todo!.performerId = performerId;
        await TodosService.setTodo(todo!);
    }

    const createTodo = ({task,taskTitle} : CreateTodoInterface) : Promise<Todo|string> => {
        const newTodo : NewTodo = {
          task,
          taskTitle,
          performerId : "",
          performer : "",
          state : "Ожидание",
      }
        return new Promise<Todo | string>((resolve, reject) => {
            TodosService.createTodo(newTodo).then(
                (res) => {
                    CreateTodo(res);
                    resolve(res)
                })
                .catch((error) => reject(error))})
    }

    const deleteTodo = async (id: string) => {
        TodosService.deleteTodo(id).then(() => {
            DeleteTodoTask({id});
        });
    }

    const resultOfLoading = CheckIsLoading({
        firstLoading: performersLoading,
        secondLoading: todosLoading,
        firstError: performersError,
        secondError: todosError,
    })

    useEffect(() => {
        fetchPerformers();
        fetchTodos();
    }, []);

    return (
        <Layout>
            <Header style={{backgroundColor : "#1890ff",
                color : "#ffffff", fontSize : "19px"}}>
                Настоящих ToDo List для настоящих ВА-шников
            </Header>
            <Content style={{backgroundColor : "#f7f8f9"}}>
                <div>
                    {!("error" in resultOfLoading && resultOfLoading.error
                        || "errors" in resultOfLoading && resultOfLoading.errors) ?
                        ("loading" in resultOfLoading && resultOfLoading.loading) ?
                            <Spin indicator={antIcon} />
                            :
                            <TodoCards createTodo={createTodo}
                                       deleteTodo={deleteTodo}
                                       changePerformerTodo={changePerformerTodo}
                                       changeStateTodo={changeStateTodo}
                                       editTodo={editTodo}
                                       todos={todos}
                                       performers={performers}/>
                        :
                        <ResultRequest
                            status="error"
                            title="Пожалуйста,повторите попытку позже"
                            subtitle={("error" in resultOfLoading && resultOfLoading.error) ?
                                (resultOfLoading.error)
                                :
                                (`${"errors" in resultOfLoading ? resultOfLoading.errors.firstError : null}
                     и ${"errors" in resultOfLoading ? resultOfLoading.errors.secondError : null}`)}
                        />
                    }
                </div>
            </Content>
        </Layout>
    );
};