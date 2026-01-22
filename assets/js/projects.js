"use strict";

window.PROJECTS = {
  "rbac-api": {
    title: "API de Usuários & Permissões (RBAC) — REST v1",
    status: "Em desenvolvimento",
    summary:
      "API focada em arquitetura em camadas, autenticação JWT, versionamento /api/v1, validação, tratamento global de erros e documentação OpenAPI.",
    stack: ["Spring Boot / Node.js", "PostgreSQL", "JWT", "Docker", "OpenAPI"],
    features: [
      "Arquitetura em camadas (controller/service/repository)",
      "Validação de dados e contratos consistentes",
      "Tratamento global de erros (HTTP padronizado)",
      "Versionamento de API (/api/v1)",
      "Documentação Swagger/OpenAPI",
    ],
    links: {
      repo: "https://github.com/Gadu05",
      docs: "",
      demo: "",
    },
    images: [
      "../assets/img/projects/rbac-api-1.webp",
    ],
  },

  "kanban": {
    title: "To-Do / Kanban (Full Stack)",
    status: "Explorando",
    summary:
      "Sistema de tarefas com login e status, integrando frontend React com backend via API REST.",
    stack: ["React", "API REST", "PostgreSQL"],
    features: [
      "CRUD de tarefas e status",
      "Consumo de API (fetch/axios)",
      "Componentização e organização de pastas",
    ],
    links: {
      repo: "https://github.com/Gadu05",
      docs: "",
      demo: "",
    },
    images: [
      "../assets/img/projects/kanban-1.webp",
    ],
  },

  "catalog-api": {
    title: "API de Catálogo (DTOs, filtros e paginação)",
    status: "Explorando",
    summary:
      "API enxuta, mas com maturidade técnica: DTOs, paginação, ordenação e filtros por query params, com logs básicos.",
    stack: ["API REST", "DTO", "Paginação", "Filtros", "Logs"],
    features: [
      "DTOs bem definidos",
      "Paginação (page/size) e ordenação",
      "Filtros por query params",
      "Logs básicos",
    ],
    links: {
      repo: "https://github.com/Gadu05",
      docs: "",
      demo: "",
    },
    images: [
      "../assets/img/projects/catalog-1.webp",
    ],
  },
};
