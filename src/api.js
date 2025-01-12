const fetchGeneratedCode = async (prompt) => {
  const response = await fetch('https://api.openai.com/v1/engines/codex/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer YOUR_API_KEY`
    },
    body: JSON.stringify({
      prompt: prompt,
      max_tokens: 100,
      n: 1,
      stop: null,
      temperature: 0.5,
    })
  });
  const data = await response.json();
  return data.choices[0].text;
};

export default fetchGeneratedCode;