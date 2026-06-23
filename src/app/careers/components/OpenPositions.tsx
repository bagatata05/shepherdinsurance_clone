'use client';

import React, { useState } from 'react';

interface Job {
  title: string;
  location: string;
  team: string;
  url: string;
}

const JOBS: Job[] = [
  {
    title: "Actuarial Data Analyst",
    location: "New York City",
    team: "Actuarial",
    url: "https://jobs.ashbyhq.com/shepherd/6100294f-ac13-4a9a-bf5c-8b49a8925820",
  },
  {
    title: "Actuarial Developer",
    location: "New York City",
    team: "Actuarial",
    url: "https://jobs.ashbyhq.com/shepherd/b1b0adbd-fde7-4396-afe0-b77382ce68ab",
  },
  {
    title: "Actuarial Data Scientist",
    location: "San Francisco",
    team: "Actuarial",
    url: "https://jobs.ashbyhq.com/shepherd/c47ddfda-187d-4271-9d23-79a2cee10a59",
  },
  {
    title: "Software Engineer, Full Stack",
    location: "San Francisco",
    team: "Engineering",
    url: "https://jobs.ashbyhq.com/shepherd/c4081c3d-a79b-4ac9-aa19-78f5e1a24c4d",
  },
  {
    title: "Software Engineer, Backend",
    location: "San Francisco",
    team: "Engineering",
    url: "https://jobs.ashbyhq.com/shepherd/395f4b75-cf05-4581-8408-8f4fe0f1480b",
  },
  {
    title: "Software Engineer, AI Product + Agents",
    location: "San Francisco",
    team: "Engineering",
    url: "https://jobs.ashbyhq.com/shepherd/6cbab29e-1bbf-42b4-9308-3823693ca288",
  },
  {
    title: "Software Engineer, Applied AI",
    location: "San Francisco",
    team: "Engineering",
    url: "https://jobs.ashbyhq.com/shepherd/26959124-aab2-446e-aa4d-7265c83e0be5",
  },
  {
    title: "Founding Machine Learning Engineer",
    location: "San Francisco",
    team: "Engineering",
    url: "https://jobs.ashbyhq.com/shepherd/797316b4-bdcc-4c0c-8bc2-46d4648db240",
  },
  {
    title: "Marketing Engineer, Brokerage Growth",
    location: "New York City",
    team: "Marketing",
    url: "https://jobs.ashbyhq.com/shepherd/8b413a20-4309-4992-8e1d-648a018cfe30",
  },
  {
    title: "Brand and Experiences",
    location: "New York City",
    team: "Marketing",
    url: "https://jobs.ashbyhq.com/shepherd/2f724b0a-9f9d-4bc6-bc97-cbec2dc10a34",
  },
  {
    title: "People Operations Lead",
    location: "San Francisco",
    team: "Operations",
    url: "https://jobs.ashbyhq.com/shepherd/1b596fd0-ffb0-4f05-84aa-d84916174e0e",
  },
  {
    title: "GTM Analytics & Strategy",
    location: "San Francisco",
    team: "Operations",
    url: "https://jobs.ashbyhq.com/shepherd/21cf56ac-008c-42b8-9bb9-0dab34a9f205",
  },
  {
    title: "Senior Underwriter",
    location: "New York City",
    team: "Underwriting",
    url: "https://jobs.ashbyhq.com/shepherd/58df8295-f3cf-47b8-83b9-fa0ed2f01fa1",
  },
  {
    title: "Executive Underwriter",
    location: "New York City",
    team: "Underwriting",
    url: "https://jobs.ashbyhq.com/shepherd/587ef394-930b-42c8-9565-3c423c314ab4",
  },
  {
    title: "Business Development",
    location: "New York City",
    team: "Underwriting",
    url: "https://jobs.ashbyhq.com/shepherd/dd6a96c8-2eda-4457-9153-9960e88ed950",
  },
];

export const OpenPositions: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredJobs = JOBS.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.team.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <section className="u-section u-theme-light">
      <div className="section_spacer no-top">
        <div className="u-container">
          <div className="u-content v-flex-8">
            <div className="content-flex v-flex-8">
              <div className="section-content-flex v-flex-5">
                <div className="section-header-grid u-grid-custom">
                  <div className="section-header-title-col u-column-span-2">
                    <div className="heading-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        viewBox="0 0 17 34"
                        fill="none"
                      >
                        <path
                          d="M16.9706 16.9705L2.07015e-05 -0.00010423L1.85557e-05 16.9705L1.641e-05 33.941L16.9706 16.9705Z"
                          fill="#DA43E7"
                        ></path>
                      </svg>
                    </div>
                    <h1
                      {...({ max: "ch25" } as any)}
                      className="section-heading u-text-style-h3"
                    >
                      Open positions
                    </h1>
                  </div>
                  <div>
                    <div className="u-text-style-main">
                      Work alongside some of the brightest minds in the
                      industry.
                    </div>
                  </div>
                </div>

                <div className="career">
                  <div className="career-grid u-grid-custom is-top">
                    <div className="career-title u-column-span-2">
                      <div
                        fs-cmsfilter-element="filters"
                        className="filter-form w-form"
                      >
                        <form
                          id="email-form"
                          name="email-form"
                          data-name="Email Form"
                          onSubmit={(e) => e.preventDefault()}
                        >
                          <input
                            className="search-field u-text-style-large w-input"
                            maxLength={256}
                            name="SEARCH"
                            placeholder="SEARCH"
                            type="text"
                            id="SEARCH"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            autoComplete="off"
                          />
                        </form>
                      </div>
                    </div>
                    <div className="u-text-style-large uppercase">
                      location
                    </div>
                    <div
                      hide-mp=""
                      className="u-text-style-large uppercase"
                    >
                      team
                    </div>
                  </div>

                  <div className="w-dyn-list">
                    {filteredJobs.length === 0 ? (
                      <div
                        style={{
                          textAlign: "center",
                          padding: "4rem 0",
                          opacity: 0.6,
                        }}
                      >
                        No positions match your search query.
                      </div>
                    ) : (
                      <div role="list" className="w-dyn-items">
                        {filteredJobs.map((job, idx) => (
                          <div
                            key={idx}
                            role="listitem"
                            className="career-item w-dyn-item"
                          >
                            <a
                              href={job.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="career-grid u-grid-custom w-inline-block"
                            >
                              <div className="career-title u-column-span-2">
                                <div className="u-text-style-large">
                                  {job.title}
                                </div>
                              </div>
                              <div className="u-text-style-large">
                                {job.location}
                              </div>
                              <div
                                hide-mp=""
                                className="u-text-style-large"
                              >
                                {job.team}
                              </div>
                            </a>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
