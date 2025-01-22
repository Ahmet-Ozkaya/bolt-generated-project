// Utility functions for search functionality
export const normalizeString = (str) => {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
};

export const searchJobs = (jobs, query, filters) => {
  if (!query && !filters) return jobs;

  const normalizedQuery = normalizeString(query || '');
  const queryTerms = normalizedQuery.split(' ').filter(Boolean);

  return jobs.filter(job => {
    // Check if job matches search query
    const matchesQuery = queryTerms.length === 0 || queryTerms.some(term => 
      normalizeString(job.title).includes(term) ||
      normalizeString(job.description).includes(term) ||
      normalizeString(job.location).includes(term) ||
      normalizeString(job.skills).includes(term) ||
      normalizeString(job.postedBy).includes(term)
    );

    // Check if job matches filters
    const matchesFilters = Object.entries(filters || {}).every(([key, value]) => {
      if (!value) return true;
      
      switch (key) {
        case 'jobType':
          return job.jobType === value;
        case 'salaryRange':
          return job.salary >= value[0] && job.salary <= value[1];
        case 'experienceLevel':
          return job.experienceLevel === value;
        case 'remote':
          return job.remote === value;
        case 'datePosted':
          const jobDate = new Date(job.postedDate);
          return jobDate >= value[0] && jobDate <= value[1];
        default:
          return true;
      }
    });

    return matchesQuery && matchesFilters;
  });
};

export const getSearchSuggestions = (jobs, query) => {
  if (!query) return [];
  
  const normalizedQuery = normalizeString(query);
  const uniqueSuggestions = new Set();

  jobs.forEach(job => {
    const fields = [
      job.title,
      job.location,
      ...job.skills.split(','),
      job.postedBy
    ];

    fields.forEach(field => {
      const normalizedField = normalizeString(field);
      if (normalizedField.includes(normalizedQuery)) {
        uniqueSuggestions.add(field);
      }
    });
  });

  return Array.from(uniqueSuggestions).slice(0, 5);
};

export const saveSearch = (searchParams) => {
  const searches = JSON.parse(localStorage.getItem('savedSearches') || '[]');
  searches.unshift({
    ...searchParams,
    timestamp: new Date().toISOString()
  });
  localStorage.setItem('savedSearches', JSON.stringify(searches.slice(0, 10)));
};

export const loadSavedSearches = () => {
  return JSON.parse(localStorage.getItem('savedSearches') || '[]');
};

export const debounce = (func, delay) => {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
};
