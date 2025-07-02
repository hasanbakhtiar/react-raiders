import { DatePicker } from "antd";

import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';


export default function Home() {
  return (
    <div>
      <h1 className="bg-amber-400 text-amber-950 p-40 text-9xl">Hello Next JS</h1>
      <DatePicker />
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
    
      </Card>
    </div>
  );
}
