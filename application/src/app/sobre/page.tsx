'use client';

import React from 'react';
import Navbar from '../../components/common/navbar';
import Card from '../../components/ui/card';

interface ContributionArea {
  title: string;
  items: string[];
}

interface TeamMember {
  name: string;
  initials: string;
  avatarId: string;
  areas: ContributionArea[];
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'João Gabriel (JG)',
    initials: 'JG',
    avatarId: 'joao-gabriel',
    areas: [
      {
        title: 'Front-end & DevOps',
        items: [
          'DevOps: CI/CD (GitHub Actions), deploy na AWS e gestão do repositório',
          'Gestão: Code review, cronograma e Setup inicial do projeto',
        ],
      },
      {
        title: 'Backend & DevOps',
        items: [
          'API: Estrutura base do projeto (Node.js + Fastify), rota /health e rota /nf-completa',
          'DevOps: CI/CD (GitHub Actions), deploy na AWS e gestão do repositório',
          'Gestão: Code review, cronograma e Setup inicial do projeto',
        ],
      },
    ],
  },
  {
    name: 'Pedro Daou (PD)',
    initials: 'PD',
    avatarId: 'pedro-daou',
    areas: [
      {
        title: 'Front-end',
        items: [
          'Telas de cálculo individual de ICMS e IPI',
          'Tela de Help',
        ],
      },
      {
        title: 'Backend',
        items: [
          'API: Rotas /icms (alíquota por estado) e /ipi (cálculo sobre produto)',
          'Testes unitários',
        ],
      },
    ],
  },
  {
    name: 'Gabriel Bonatto',
    initials: 'GB',
    avatarId: 'gabriel-bonatto',
    areas: [
      {
        title: 'Front-end & Doc',
        items: [
          'Tela de cálculo individual de PIS/COFINS',
          'Tela "Sobre" (Equipe)',
          'Testes funcionais e documentação técnica (README)',
        ],
      },
      {
        title: 'Backend & Doc',
        items: [
          'API: Rota /pis-cofins (regimes cumulativo/não cumulativo)',
          'Testes unitários',
          'Testes funcionais e documentação técnica (README)',
        ],
      },
    ],
  },
];

const TECH_STACK = {
  backend: ['Node.js', 'Fastify', 'TypeScript', 'Vitest'],
  frontend: ['Next.js 15', 'React 19', 'TypeScript', 'CSS3'],
  devops: ['Git', 'CI/CD (GitHub Actions)', 'AWS', 'Biome'],
};

export default function SobrePage() {
  return (
    <div>
      <Navbar />
      <main className="about-container">
        <div className="about-wrapper">
          <h1>Sobre</h1>

          <Card className="section-card project-info">
            <h2>Projeto</h2>
            <div className="info-item">
              <span className="label">Nome:</span>
              <span className="value">Cálculo de Impostos - NF Venda Produto</span>
            </div>
            <div className="info-item">
              <span className="label">Disciplina:</span>
              <span className="value">GCEIC26</span>
            </div>
            <div className="info-item">
              <span className="label">Instituição:</span>
              <span className="value">PUC Campinas</span>
            </div>
            <div className="info-item">
              <span className="label">Tema:</span>
              <span className="value">Cálculo de Impostos Fiscais (IPI, PIS, CONFINS, ICMS)</span>
            </div>
            <div className="info-item">
              <span className="label">Objetivo:</span>
              <span className="value">
                Desenvolver API e aplicação web para cálculo automático de impostos em notas fiscais de venda de produtos.
              </span>
            </div>
          </Card>

          <Card className="section-card team-info">
            <h2>Equipe</h2>
            <div className="team-grid">
              {TEAM_MEMBERS.map((member, index) => (
                <div key={index} className="team-member-card">
                  <div className="member-avatar">
                    <img
                      src={`/avatars/${member.avatarId}.png`}
                      alt={member.name}
                    />
                  </div>
                  <div className="member-info">
                    <h3>👨‍💻 {member.name}</h3>
                    <div className="member-contributions">
                      {member.areas.map((area, i) => (
                        <div key={i} className="contribution-area">
                          <p className="contribution-title">{area.title}</p>
                          <ul>
                            {area.items.map((item, j) => (
                              <li key={j}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="section-card tech-stack">
            <h2>Tecnologias</h2>
            <div className="tech-list">
              <div className="tech-category">
                <h3>Backend</h3>
                <ul>
                  {TECH_STACK.backend.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="tech-category">
                <h3>Frontend</h3>
                <ul>
                  {TECH_STACK.frontend.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="tech-category">
                <h3>DevOps</h3>
                <ul>
                  {TECH_STACK.devops.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>

          <Card className="section-card repository">
            <h2>Repositório</h2>
            <a
              href="https://github.com/sergiolmm-pucc/GCEIC26"
              target="_blank"
              rel="noopener noreferrer"
              className="repo-link"
            >
              github.com/sergiolmm-pucc/GCEIC26
            </a>
          </Card>
        </div>
      </main>
    </div>
  );
}