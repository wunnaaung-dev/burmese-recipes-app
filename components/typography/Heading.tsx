'use client'
import { Typography } from 'antd';
const { Title } = Typography;

interface TitleProps {
  level?: 1 | 2 | 3 | 4 | 5;
  className?: string;
  color?: string;
  children: React.ReactNode; // Accept children as React node
}

const Heading = ({ level, className, children, color }: TitleProps) => {
  return (
    <Typography>
      <Title  level={level} className={className} style={{ color: color }}>
        {children}
      </Title>
    </Typography>
  );
};

export default Heading;
