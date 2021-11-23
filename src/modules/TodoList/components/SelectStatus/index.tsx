import React, {useState} from 'react';
import {Select} from "antd";
import {SelectStatusInterface, TodoStateTypes} from "./SelectStatus.interface";

const { Option } = Select;


export const SelectStatus = ({stateValue,todoId} : SelectStatusInterface) : JSX.Element => {
    const defaultValue : TodoStateTypes = stateValue || "Ожидание";
    const [todoStatus, setTodoStatus] = useState<TodoStateTypes>(defaultValue);

    const handleStatus = (value: TodoStateTypes) => {
        if (!('Ожидание' === stateValue)) {
            setTodoStatus(value);
        }
    }

    return (
        <Select
            value={todoStatus}
            style={{ width: 120, margin: '0 8px' }}
            onChange={handleStatus}
        >
            {todoStatus === 'Ожидание' &&
                <Option value="Ожидание">Ожидание</Option>
            }
            <Option value="В работе">В работе</Option>
            <Option value="Готово">Готово</Option>
        </Select>
    );
};

