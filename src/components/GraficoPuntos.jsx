import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

function GraficoPuntos({ data }) {
  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="pais" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="puntos" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GraficoPuntos;
