export default function Home() {
  return (
    <div style={{
      maxWidth: "900px",
      margin: "40px auto",
      padding: "40px",
      fontFamily: "Arial, sans-serif",
      lineHeight: "1.6"
    }}>
      <h1 style={{ fontSize: "36px", marginBottom: "5px" }}>
        Kishan Teja Dammalapati
      </h1>

      <p style={{ fontSize: "18px", color: "#555" }}>
        Power BI & Data Analyst
      </p>

      <hr style={{ margin: "30px 0" }} />

      <section>
        <h2>About Me</h2>
        <p>
          Entry-level Power BI analyst with hands-on experience in data analysis,
          dashboard creation, and business intelligence. Passionate about turning
          raw data into meaningful business insights.
        </p>
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          <li>Power BI (Desktop & Service)</li>
          <li>DAX & Data Modeling</li>
          <li>SQL Server</li>
          <li>Power Query (ETL)</li>
          <li>Microsoft Excel</li>
        </ul>
      </section>

      <section>
        <h2>Project</h2>
        <h3>Superstore Sales Analysis & Forecasting</h3>
        <p>
          Built an interactive Power BI dashboard to analyze sales, profit,
          regional trends, and perform sales forecasting using historical data.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Email: <strong>kishanteja15@gmail.com</strong></p>
        <p>Phone: <strong>9703210978</strong></p>
      </section>
    </div>
  );
}
