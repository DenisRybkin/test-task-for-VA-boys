import React, {useState} from 'react';
import {Select} from "antd";
import {SelectPerformerInterface} from "./SelectPerformer.interface";

const { Option } = Select;


export const SelectPerformer = ({performer,performersList,todoId,performerId,changePerformerTodo} : SelectPerformerInterface) : JSX.Element => {
    const defaultValue : string | null  = performer || null;
    // @ts-ignore

    const [todoPerformer, setTodoPerformer] = useState<string| null>(defaultValue ? defaultValue : null);

    const handlePerformer = (value: string) => {
        const idOfNewPerformer = performersList?.find(item => item.name === value)!.id;
        setTodoPerformer(value);
        changePerformerTodo({
            performer : value,
            performerId : String(idOfNewPerformer!),
            todoId : String(todoId)
        });
    }

    return (
        <Select
            value={todoPerformer ? todoPerformer : undefined}
            style={{ width: 170, margin: '0 8px' }}
            onChange={handlePerformer}
        >
            {performersList && performersList.map(item => (
                <Option key={item.id} value={item.name}>{item.name}</Option>
            ))}
        </Select>
    );
};

