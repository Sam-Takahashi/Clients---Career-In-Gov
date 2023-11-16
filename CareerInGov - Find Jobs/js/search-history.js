// ===============================================
// -------- Search history selection & suggestions
// ===============================================
const recentSearchList = document.getElementById('id_search_recent_list');

// Function to handle form submission and store recent searches in cookies
function handleFormSubmit(event) {
  event.preventDefault();
  const searchInput = document.getElementById('dropdown__keyword-input');
  const selectedSearchTermInput = document.getElementById('selectedSearchTerm');
  // const recentSearchList = document.getElementById('id_search_recent_list');
  const searchTerm = searchInput.value || selectedSearchTermInput.value;

  if (searchTerm) {
    // Get the current list of recent searches from cookies
    const recentSearches = getCookies('recentSearches') || [];

    // Limit the list to the most recent 5 searches
    if (recentSearches.length >= 5) {
      recentSearches.pop(); // Remove the oldest search
    }

    // Prepend the new search to the list
    recentSearches.unshift(searchTerm);

    // Store the updated list in cookies
    setCookies('recentSearches', JSON.stringify(recentSearches));

    searchInput.value = '';

    // Update the displayed list of recent searches
    updateRecentSearchList(recentSearchList, recentSearches);
  }
}

// Function to read cookies
function getCookies(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return JSON.parse(parts.pop().split(';').shift());
}

// Function to set cookies
function setCookies(name, value) {
  document.cookie = `${name}=${value}; path=/`;
}

// Function to update the displayed list of recent searches and control visibility
function updateRecentSearchList(list, searches) {
  list.innerHTML = '';
  if (searches.length === 0) {
    // No recent searches, hide the wrapper
    document.getElementById('id_search_recent_wrapper').style.display = 'none';
  } else {
    // Show the wrapper and populate the list
    document.getElementById('id_search_recent_wrapper').style.display = 'block';
    searches.forEach(searchTerm => {
      const listItem = document.createElement('li');
      listItem.textContent = searchTerm;
      list.appendChild(listItem);
    });
  }
}

// Attach the form submission handler
const searchForm = document.getElementById('id_find_job_form');
searchForm.addEventListener('submit', handleFormSubmit);

// Load recent searches from cookies on page load
const recentSearches = getCookies('recentSearches') || [];
updateRecentSearchList(document.getElementById('id_search_recent_list'), recentSearches);


// *
// Function to handle recent search item click (form resubmission)
function handleRecentSearchClick(event) {
  const searchInput = document.getElementById('dropdown__keyword-input');
  const selectedSearchTermInputCookie = document.getElementById('selectedSearchTerm');
  const listItem = event.target;

  if (listItem.tagName === 'LI') {
    event.preventDefault(); // Prevent the default behavior only when clicking on a list item
    const searchTerm = listItem.textContent;
    searchInput.value = searchTerm;
    selectedSearchTermInputCookie.value = searchTerm;

    // searchForm.submit();
  }
}

// Attach the recent search item click handler
recentSearchList.addEventListener('click', handleRecentSearchClick);

// *
// Function to handle suggest search item click (form resubmission)
function handleSuggestSearchClick(event) {
  const searchInput = document.getElementById('dropdown__keyword-input');
  const listItem = event.target;

  if (listItem.tagName === 'LI') {
    event.preventDefault();
    const searchTerm = listItem.textContent;
    searchInput.value = searchTerm;
    // searchForm.submit();
  }
}

// Attach the suggest search item click handler
const suggestSearchList = document.getElementById('id_search_job_suggest');

suggestSearchList.addEventListener('click', handleSuggestSearchClick);

