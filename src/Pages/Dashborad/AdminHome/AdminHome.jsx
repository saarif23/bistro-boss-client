import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { MdPayment } from "react-icons/md";
import { FaList, FaUsers } from "react-icons/fa6";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Sector, ResponsiveContainer, Legend } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


const AdminHome = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const { data: stats = [] } = useQuery({
        queryKey: ["admin-stats"],
        queryFn: async () => {
            const res = await axiosSecure('/admin-stats');
            // console.log(res.data);
            return res.data
        }
    })
    const { data: chartData = [] } = useQuery({
        queryKey: ["order-stats"],
        queryFn: async () => {
            const res = await axiosSecure('/order-stats');
            // console.log(res.data);
            return res.data
        }
    })



    // custom shave for bar chart

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };


    const pieChartData = chartData.map(data => {
        return { name: data.category, value: data.quantity }
    })
    // custom shave for pie chart
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };


    return (
        <>
            <div className="pt-5">
                <div className="text-3xl">
                    <span>HI, Welcme </span>
                    {user?.displayName ? user.displayName : "Back"}
                </div>
                <div className="grid grid-cols-4 gap-5">
                    <div className="shadow-lg mt-5 flex items-center gap-5  bg-gradient-to-r from-purple-500 to-purple-200 rounded-md p-5 text-white">
                        <div className="text-4xl">
                            <MdPayment></MdPayment>
                        </div>
                        <div className="">
                            <div className="stat-title">Total Revenue</div>
                            <div className="stat-value">{stats.revenue}</div>
                        </div>
                    </div>
                    <div className="shadow-lg mt-5 flex items-center gap-5  bg-gradient-to-r from-orange-500 to-orange-200 rounded-md p-5 text-white">
                        <div className="text-4xl">
                            <FaList></FaList>
                        </div>
                        <div className="">
                            <div className="stat-title">Total Items</div>
                            <div className="stat-value">{stats.menuItems}</div>
                        </div>
                    </div>
                    <div className="shadow-lg mt-5 flex items-center gap-5  bg-gradient-to-r from-yellow-600 to-yellow-200 rounded-md p-5 text-white">
                        <div className="text-4xl">
                            <FaUsers></FaUsers>
                        </div>
                        <div className="">
                            <div className="stat-title">Total Customers</div>
                            <div className="stat-value">{stats.users}</div>
                        </div>
                    </div>
                    <div className="shadow-lg mt-5 flex items-center gap-5  bg-gradient-to-r from-blue-400 to-blue-200 rounded-md p-5 text-white">
                        <div className="text-4xl">
                            <MdPayment></MdPayment>
                        </div>
                        <div className="">
                            <div className="stat-title">Total Order</div>
                            <div className="stat-value">{stats.order}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" flex justify-between items-center mt-10">
                <BarChart
                    width={500}
                    height={300}
                    data={chartData}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
                <PieChart width={400} height={400}>
                    <Pie
                        data={pieChartData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {pieChartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Legend/>
                </PieChart>
            </div>
        </>
    );
};

export default AdminHome;