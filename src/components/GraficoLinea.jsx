import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const GraficoLinea = ({ paises }) => {
  const data = {
    labels: paises.map(p => p.pais),
    datasets: [
      {
        label: "Puntos",
        data: paises.map(p => Number(p.puntos)),
        borderColor: "#2575fc",
        backgroundColor: "rgba(37,117,252,0.2)",
        tension: 0.3,
        fill: true
      }
    ]
  };

  const options = {
    plugins: {
      legend: { display: true, position: 'top' }
    },
    responsive: true
  };

  return <Line data={data} options={options} />;
};

export default GraficoLinea;
