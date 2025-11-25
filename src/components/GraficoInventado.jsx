import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GraficoInventado = ({ paises }) => {
  const data = {
    labels: paises.map(p => p.pais),
    datasets: [
      {
        label: "Puntos",
        data: paises.map(p => Number(p.puntos)),
        backgroundColor: "rgba(153,102,255,0.6)",
        borderRadius: 8
      }
    ]
  };

  const options = {
    plugins: { legend: { position: "top" } },
    responsive: true
  };

  return <Bar data={data} options={options} />;
};

export default GraficoInventado;
