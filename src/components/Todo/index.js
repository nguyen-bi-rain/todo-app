import { Row, Tag, Checkbox, Col } from 'antd';
import { useState } from 'react';
import { BsTrash } from 'react-icons/bs'

const priorityColorMapping = {
    High: 'red',
    Medium: 'blue',
    Low: 'gray',
};

export default function Todo({ name, prioriry, onTrashClick }) {
    const [checked, setChecked] = useState(false);

    const toggleCheckbox = () => {
        setChecked(!checked);
    };

    return (
        <Row
            justify='space-between'
            style={{
                marginBottom: 3,
                ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
            }}
        >
            <Checkbox checked={checked} onChange={toggleCheckbox}>
                {name}
            </Checkbox>
            <Col>
                <Tag color={priorityColorMapping[prioriry]} style={{ margin: 0, marginRight: 5 }}>
                    {prioriry}
                </Tag>
                <BsTrash onClick={onTrashClick} />
            </Col>
        </Row>
    );
}