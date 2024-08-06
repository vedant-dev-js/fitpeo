import React from 'react';
import Layout from './Layout';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, ComposedChart, Legend, Line, LineChart, Pie, PieChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Rectangle, ReferenceLine, ResponsiveContainer, Scatter, Tooltip, XAxis, YAxis } from "recharts";
import "../Style/dashboard.css"
import img from "../images/clipboard.png"
import ModeStandbyOutlinedIcon from '@mui/icons-material/ModeStandbyOutlined';
import LunchDiningOutlinedIcon from '@mui/icons-material/LunchDiningOutlined';
import TakeoutDiningOutlinedIcon from '@mui/icons-material/TakeoutDiningOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import EventBusyOutlinedIcon from '@mui/icons-material/EventBusyOutlined';
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import WorkIcon from '@mui/icons-material/Work';
import CustomerFeedBack from './FeedBack';
import SavingsIcon from '@mui/icons-material/Savings';
import GppBadIcon from '@mui/icons-material/GppBad';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export default function Dashboard() {

  const data = [
    {
      subject: 'Math',
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: 'Chinese',
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'English',
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Geography',
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: 'Physics',
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: 'History',
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ];

  const data2 = [
    {
      name: 'Page A',
      uv: 590,
      pv: 800,
      amt: 1400,
      cnt: 490,
    },
    {
      name: 'Page B',
      uv: 868,
      pv: 967,
      amt: 1506,
      cnt: 590,
    },
    {
      name: 'Page C',
      uv: 1397,
      pv: 1098,
      amt: 989,
      cnt: 350,
    },
    {
      name: 'Page D',
      uv: 1480,
      pv: 1200,
      amt: 1228,
      cnt: 480,
    },
    {
      name: 'Page E',
      uv: 1520,
      pv: 1108,
      amt: 1100,
      cnt: 460,
    },
    {
      name: 'Page F',
      uv: 1520,
      pv: 1908,
      amt: 1100,
      cnt: 460,
    },
    {
      name: 'Page G',
      uv: 1520,
      pv: 1108,
      amt: 1100,
      cnt: 460,
    },
    {
      name: 'Page H',
      uv: 1520,
      pv: 1108,
      amt: 400,
      cnt: 460,
    },
    {
      name: 'Page I',
      uv: 1520,
      pv: 810,
      amt: 1100,
      cnt: 460,
    },
    {
      name: 'Page J',
      uv: 1520,
      pv: 778,
      amt: 1100,
      cnt: 460,
    },
    {
      name: 'Page K',
      uv: 1520,
      pv: 808,
      amt: 1100,
      cnt: 460,
    },
    {
      name: 'Page L',
      uv: 1520,
      pv: 1208,
      amt: 1100,
      cnt: 460,
    },
    {
      name: 'Page M',
      uv: 1520,
      pv: 808,
      amt: 1100,
      cnt: 460,
    },
    {
      name: 'Page N',
      uv: 1520,
      pv: 1408,
      amt: 1100,
      cnt: 460,
    },
  ];


  const userData = [
    {
      img: "data:image/jpeg;base64,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",
      name: "Wade warner",
      order: 13435,
      amount: 123.44,
      status: true
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuSyzpzErCvoI_z6oTBTzYSm8num6ob7DCKA&s",
      name: "Wade warner",
      order: 13435,
      amount: 123.44,
      status: true
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScC14-HzeUSmKGbr7wghqoLqHx2X1a_HLyUg&s",
      name: "Wade warner",
      order: 13435,
      amount: 123.44,
      status: false
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJOM_cnHGH5PB-ioINL83eIB9B-H_8POHkjA&s",
      name: "Wade warner",
      order: 13435,
      amount: 123.44,
      status: true
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSySDkqTpmEatFJdKWaNNpGasSNppFNwbBpWQ&s",
      name: "Wade warner",
      order: 13435,
      amount: 123.44,
      status: false
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTUyYy8VruEHbKZh5wwGKo8iYA-88EMCgnHA&s",
      name: "Wade warner",
      order: 13435,
      amount: 123.44,
      status: true
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP3dx9XZ1T2Bh0ubxX9gXnEL3nevy_sNoxhQ&s",
      name: "Wade warner",
      order: 13435,
      amount: 123.44,
      status: true
    },

  ]

  const data01 = [
    {
      "name": "Group A",
      "value": 400
    },
    {
      "name": "Group B",
      "value": 300
    },
    {
      "name": "Group C",
      "value": 300
    },
    {
      "name": "Group D",
      "value": 200
    },
    {
      "name": "Group E",
      "value": 278
    },
    {
      "name": "Group F",
      "value": 189
    }
  ];
  const data02 = [
    {
      "name": "Group A",
      "value": 2400
    },
    {
      "name": "Group B",
      "value": 4567
    },
    {
      "name": "Group C",
      "value": 1398
    },
    {
      "name": "Group D",
      "value": 9800
    },
    {
      "name": "Group E",
      "value": 3908
    },
    {
      "name": "Group F",
      "value": 4800
    }
  ];

  const data5 = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 1090,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Page H',
      uv: 3890,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Page I',
      uv: 8790,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Page J',
      uv: 5590,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Page K',
      uv: 4490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Page L',
      uv: 390,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Page M',
      uv: 7090,
      pv: 4300,
      amt: 2100,
    },
    
    {
      name: 'Page N',
      uv: 5490,
      pv: 4300,
      amt: 2100,
    },
    
    {
      name: 'Page O',
      uv: 2490,
      pv: 4300,
      amt: 2100,
    },
    
    {
      name: 'Page P',
      uv: 490,
      pv: 4300,
      amt: 2100,
    },
    
    
  ];
  
  return (
    <>
      <Layout>

      <div className='parent' >
    <h1 className='text-white fw-bold' >Dashboard</h1>
      </div>

        <div className='parent' >
          <div className='dash-left' >
            <div className='small-chart' >
               <span className='d-flex m1 justify-content-center align-items-center' style={{height:"50px",width:"50px",borderRadius:"10px"}} >
                <ShoppingCartIcon className='text-white fs-1 text-danger' />
              </span>
              <span className='title' >Total orders</span>
              <span className='small-chart-bottom' >
                <span className='num' >75</span>
                <span className='num2'><ArrowDropDownOutlinedIcon className='text-danger' />3%</span>
              </span>
            </div> <div className='small-chart' >
            <span className='d-flex justify-content-center m2' style={{height:"50px",width:"50px",borderRadius:"10px"}}>

<WorkIcon className='text-white fs-1 text-danger' />

</span>
              <span className='title'>Total Delivered</span>
              <span className='small-chart-bottom' >
                <span className='num' >70</span>
                <span className='num2' ><ArrowDropUpOutlinedIcon className='text-success' />3%</span>
              </span>
            </div> <div className='small-chart' >
              <span className='d-flex justify-content-center m3' style={{height:"50px",width:"50px",borderRadius:"10px"}}>

                <GppBadIcon className='text-white fs-1 text-danger' />

              </span>
              <span className='title'>Total Cancelled</span>
              <span className='small-chart-bottom' >
                <span className='num' >05</span>
                <span className='num2' ><ArrowDropDownOutlinedIcon className='text-danger' />3%</span>
              </span>
            </div> <div className='small-chart' >
            <span className='d-flex justify-content-center m4' style={{height:"50px",width:"50px",borderRadius:"10px"}}>

<SavingsIcon className='text-white fs-1 text-danger' />

</span>
              <span className='title'>Total Revunue</span>
              <span className='small-chart-bottom' >
                <span className='num' >$ 12K</span>
                <span className='num2'><ArrowDropUpOutlinedIcon className='text-success' />3%</span>
              </span>
            </div>


          </div>
          <div className='dash-right ' >
            <div className='dash-right-1' >
              <div className='dash-right-1-left' >
                <span>Net Profit</span>
                <span className='big-number' >$ 8757.25</span>
                <span className='num2'>3%</span>
              </div>
              <div className='dash-right-1-right' >
                <ResponsiveContainer style={{ fontSize: "10px", color: "white" }} width="90%" height="90%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis />
                    <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div></div>
          </div>
        </div>








        <div className='parent' >
          <div className='dash-left mytable dash-2' >
            <div className='dash2-content' >
              <span>Activity</span>
              <span className='me-5' >
                <select className='form-select p-1  bg-dark text-white' >
                  <option>Monthly</option>
                  <option>Monthly</option>
                  <option>Monthly</option>
                </select>
              </span>
            </div>
            <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data5}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
          </div>
          <div className='px-3 dash-3 mytable d-flex flex-column justify-content-center align-items-center  dash-right text-white' >

            <div className='my-4 d-flex container justify-content-between align-items-center' >
              <div>
                <span className='p-4 me-3 icone1 rounded-circle' > <LunchDiningOutlinedIcon /></span>
                <span>Goals</span>
              </div>
              <div><button className='btn text-white' ><ArrowForwardIosOutlinedIcon /></button></div>
            </div>
            <hr className='bg-white' ></hr>

            <div className=' my-3 d-flex container justify-content-between align-items-center' >
              <div>
                <span className='p-4 me-3 icone2  rounded-circle' > <TakeoutDiningOutlinedIcon /></span>
                <span>Goals</span>
              </div>
              <div><button className='btn text-white' ><ArrowForwardIosOutlinedIcon /></button></div>
            </div>

            <div className=' my-5 d-flex container justify-content-between align-items-center' >
              <div>
                <span className='p-4 me-3  icone3  rounded-circle' > <ModeStandbyOutlinedIcon /></span>
                <span>Goals</span>
              </div>
              <div><button className='btn text-white' ><ArrowForwardIosOutlinedIcon /></button></div>
            </div>

          </div>

        </div>









        <div className='parent' >
          <div className='dash-left mytable dash-3 px-2 d-flex flex-column' >
            <h1 className='text-white fs-3 py-3 ' >Recent Order</h1>
            <table className='table table-dark table-dark2 ' >
              <tbody>
                <tr>
                  <th>Customer</th>
                  <th>Order no</th>
                  <th>Amount</th>
                  <th>status</th>
                </tr>

                {
                  userData.map((value, index) => {
                    return (
                      <tr key={index} >
                        <td><img style={{ height: "30px", borderRadius: "50%", width: "30px" }} src={value.img} /> {value.name}</td>
                        <td className='order' >{value.order}</td>
                        <td className='price' >${value.amount}</td>
                        <td>{value.status == true ? (<><span className='px-3  bg-success' style={{ borderRadius: "10px", fontSize: "14px" }} >Deliver</span></>) : (<><span className='px-3  bg-danger' style={{ borderRadius: "10px", fontSize: "14px" }} >Pending</span></>)}</td>

                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
          <div className='h-100 w-full md:w-4/12 text-white  dash-right dash-3 flex-column' >
<CustomerFeedBack/>

          </div>
        </div>
      </Layout>
    </>
  );
}
