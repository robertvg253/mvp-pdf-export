import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  route("home", "routes/home.tsx"),
  route("test-db", "routes/test-db.tsx"),
  layout("routes/_layout.tsx", [
    route("dashboard", "routes/dashboard.tsx"),
    route("export-pdf", "routes/export-pdf.tsx"),
    // Rutas eliminadas: historial, agent, logout, modulo2
  ]),
] satisfies RouteConfig;
