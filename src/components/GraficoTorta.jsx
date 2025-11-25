import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const GraficoTorta = ({ paises }) => {
  const data = {
    labels: paises.map(p => p.pais),
    datasets: [{
      label: 'Puntos',
      data: paises.map(p => Number(p.puntos)),
      backgroundColor: [
        '#FF6384','#36A2EB','#FFCE56','#4BC0C0','#9966FF',
        '#FF9F40','#66FF66','#FF6666','#6666FF','#FF66FF',
        '#33CCCC','#CC9933','#FFCC33','#66CC66','#CC66CC',
        '#FF9966','#6699FF','#FF6699','#66FF99','#9999FF'
      ],
      borderWidth: 2,
      borderColor: '#fff',
      hoverOffset: 10
    }]
  };

  const options = {
    plugins: {
      legend: {
        position: 'right',
        labels: { color: '#333', font: { size: 12 } }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.label}: ${context.raw} pts`;
          }
        }
      }
    }
  };

  return <Doughnut data={data} options={options} />;
};

export default GraficoTorta;
