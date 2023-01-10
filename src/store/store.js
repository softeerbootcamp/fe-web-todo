export function getData(key) {
  let data = JSON.parse(localStorage.getItem(`${key}`));

  if (key === 'countTask' && !data) {
    data = 0;
  } else if (!data) {
    data = [];
    localStorage.setItem(`${key}`, JSON.stringify(data));
  }

  return data;
}

export function setData(key, name = '') {
  let data = getData(key);

  if (key === 'countTask') {
    data += 1;
    return localStorage.setItem(`${key}`, JSON.stringify(data));
  }

  data.push(name);
  localStorage.setItem(`${key}`, JSON.stringify(data));
  location.reload();
}

export function clear() {
  localStorage.clear();
  location.reload();
}
