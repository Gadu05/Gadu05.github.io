"use strict";

/**
 * Dados dos projetos (você vai só trocar os links quando criar os repositórios).
 * status: "concluido" | "desenvolvimento" | "explorando"
 */
/*const PROJECTS = [
    {
        title: "API de Usuários & Permissões (RBAC) — REST v1",
        status: "desenvolvimento",
        description:
            "API com foco em arquitetura em camadas, autenticação JWT, versionamento (/api/v1), validação, tratamento global de erros e documentação OpenAPI.",
        tags: ["REST", "JWT", "PostgreSQL", "Docker", "OpenAPI", "Arquitetura"],
        repoUrl: "https://github.com/Gadu05",
        liveUrl: "",
        highlights: [
            "Controllers/Services/Repositories bem definidos",
            "Tratamento global de erros (HTTP consistente)",
            "Swagger/OpenAPI + README com decisões arquiteturais",
        ],
    },
    {
        title: "To-Do / Kanban (Full Stack)",
        status: "explorando",
        description:
            "Aplicação de tarefas com login e status (pendente/em andamento/concluído), integrando frontend React com backend via API REST.",
        tags: ["React", "REST", "State", "PostgreSQL", "Full Stack"],
        repoUrl: "https://github.com/Gadu05",
        liveUrl: "",
        highlights: [
            "Integração front↔back e consumo de API (fetch/axios)",
            "Componentização e organização de pastas",
            "UI minimalista e responsiva",
        ],
    },
    {
        title: "API de Catálogo (DTOs, filtros e paginação)",
        status: "explorando",
        description:
            "API enxuta, mas com maturidade técnica: DTOs, paginação (page/size), ordenação e filtros por query params, além de logs básicos.",
        tags: ["DTO", "Paginação", "Filtros", "Logs", "REST"],
        repoUrl: "https://github.com/Gadu05",
        liveUrl: "",
        highlights: [
            "Contratos de DTO bem definidos",
            "Paginação e ordenação padronizadas",
            "README explicando escolhas e trade-offs",
        ],
    },
];*/

function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
}

function statusLabel(status) {
    switch (status) {
        case "concluido":
            return { text: "Concluído", cls: "pill pill--concluido" };
        case "desenvolvimento":
            return { text: "Em desenvolvimento", cls: "pill pill--desenvolvimento" };
        case "explorando":
            return { text: "Explorando", cls: "pill pill--explorando" };
        default:
            return { text: "Status", cls: "pill" };
    }
}

const PROJECT_LIST = Object.entries(window.PROJECTS ?? {}).map(
  ([slug, data]) => ({ slug, ...data })
);

function renderProjects(filter = "todos") {
    const grid = document.getElementById("projectsGrid");
    grid.innerHTML = "";

    const list = PROJECT_LIST.filter(
        (p) => filter === "todos" || normalizeStatus(p.status) === filter
    );

    for (const p of list) {
        const card = el("article", "panel project");

        const meta = el("div", "project__meta");
        const h3 = el("h3", "project__title", p.title);

        const st = statusLabel(normalizeStatus(p.status));
        const pill = el("span", st.cls, st.text);
        

        meta.appendChild(h3);
        meta.appendChild(pill);

        const desc = el("p", "project__desc", p.summary ?? "");

        const tags = el("div", "project__tags");
        for (const t of (p.stack ?? [])) tags.appendChild(el("span", "tag", t));

        const ul = el("ul");
        ul.style.margin = "0";
        ul.style.paddingLeft = "18px";
        ul.style.color = "var(--muted)";
        for (const h of (p.features ?? [])) ul.appendChild(el("li", "", h));

        const links = el("div", "project__links");
        if (p.links?.repo) links.appendChild(linkButton("Repositório", p.links.repo, true));
        if (p.links?.demo) links.appendChild(linkButton("Demo", p.links.demo, true));
        if (p.links?.docs) links.appendChild(linkButton("Docs", p.links.docs, true));


        if (p.slug) links.appendChild(linkButton("Detalhes", `projects/${p.slug}.html`, false));

        card.appendChild(meta);
        card.appendChild(desc);
        card.appendChild(tags);
        card.appendChild(ul);
        card.appendChild(links);

        grid.appendChild(card);
    }

    if (list.length === 0) {
        const empty = el("p", "", "Nenhum projeto encontrado para esse filtro.");
        empty.style.color = "var(--muted)";
        grid.appendChild(empty);
    }
}

function normalizeStatus(status) {
  const s = (status ?? "").toLowerCase();
  if (s.includes("concl")) return "concluido";
  if (s.includes("desenv")) return "desenvolvimento";
  if (s.includes("explor")) return "explorando";
  return "";
}


function linkButton(text, href, external) {
    const a = document.createElement("a");
    a.className = "btn btn--ghost";
    a.href = href;
    a.textContent = text;
    if (external) {
        a.target = "_blank";
        a.rel = "noreferrer";
    }
    return a;
}



function setupFilters() {
    const chips = Array.from(document.querySelectorAll(".chip"));
    chips.forEach((chip) => {
        chip.addEventListener("click", () => {
            chips.forEach((c) => c.classList.remove("is-active"));
            chip.classList.add("is-active");
            renderProjects(chip.dataset.filter);
        });
    });
}

function setupNavToggle() {
    const toggle = document.querySelector(".nav__toggle");
    const menu = document.getElementById("menu");
    if (!toggle || !menu) return;

    toggle.addEventListener("click", () => {
        const open = menu.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(open));
    });
}

function init() {
    document.getElementById("year").textContent = String(new Date().getFullYear());
    setupFilters();
    setupNavToggle();
    renderProjects("todos");
}

document.addEventListener("DOMContentLoaded", init);
