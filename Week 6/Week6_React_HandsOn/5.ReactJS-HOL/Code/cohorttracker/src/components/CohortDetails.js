import React from 'react';
import styles from './CohortDetails.module.css';

const cohorts = [
  {
    name: 'INTADMDF10 - .NET FSD',
    startedOn: '22-Feb-2022',
    status: 'Scheduled',
    coach: 'Aathma',
    trainer: 'Jojo Jose',
    color: 'blue'
  },
  {
    name: 'ADM21JF014 - Java FSD',
    startedOn: '10-Sep-2021',
    status: 'Ongoing',
    coach: 'Apoorv',
    trainer: 'Elisa Smith',
    color: 'green'
  },
  {
    name: 'CDBJF21025 - Java FSD',
    startedOn: '24-Dec-2021',
    status: 'Ongoing',
    coach: 'Aathma',
    trainer: 'John Doe',
    color: 'green'
  }
];

const CohortDetails = () => {
  return (
    <div className={styles.container}>
      <h2>Cohorts Details</h2>
      <div className={styles.cohortList}>
        {cohorts.map((cohort, index) => (
          <div key={index} className={styles.card}>
            <h3 style={{ color: cohort.color }}>{cohort.name}</h3>

            <dt>Started On</dt>
            <dd className={styles.value}>{cohort.startedOn}</dd>

            <dt>Current Status</dt>
            <dd className={styles.value}>{cohort.status}</dd>

            <dt>Coach</dt>
            <dd className={styles.value}>{cohort.coach}</dd>

            <dt>Trainer</dt>
            <dd className={styles.value}>{cohort.trainer}</dd>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CohortDetails;
