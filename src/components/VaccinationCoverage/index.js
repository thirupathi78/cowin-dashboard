// Write your code here
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import './index.css'

const VaccinationByCoverage = props => {
  const {data} = props

  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 2000).toString()}k`
    }
    return number.toString()
  }

  return (
    <div className="vaccination-coverage">
      <h1 className="heading">Vaccination Coverage</h1>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          data={data}
          margin={{
            top: 5,
          }}
        >
          <XAxis
            dataKey="vaccine_date"
            tick={{
              stroke: 'gray',
              strokeWidth: 1,
            }}
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{
              stroke: 'gray',
              strokeWidth: 0,
            }}
          />
          <Legend
            wrapperStyle={{
              padding: 30,
            }}
          />
          <Bar dataKey="dose_1" name="Dose 1" fill="#1f77b4" barSize="10%" />
          <Bar dataKey="dose_2" name="Dose 2" fill="#f54394" barSize="10%" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByCoverage
