import React, {useState} from 'react';
import {Select} from "antd";
import {SelectPerformerInterface} from "./SelectPerformer.interface";

const { Option } = Select;


export const SelectPerformer = ({performer,performersList,todoId} : SelectPerformerInterface) : JSX.Element => {
    const defaultValue : string | null  = performer || null;
    const [todoPerformer, setTodoPerformer] = useState<string| null>(defaultValue);

    const handleStatus = (value: string) => {
        setTodoPerformer(value);
    }

    return (
        <Select
            value={todoPerformer ? todoPerformer : undefined}
            style={{ width: 120, margin: '0 8px' }}
            onChange={handleStatus}
        >
            {performersList && performersList.map(item => (
                <Option key={item.id} value={item.name}>{item.name}</Option>
            ))}
        </Select>
    );
};

