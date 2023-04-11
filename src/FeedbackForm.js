import { useState } from "react";

function FeedbackForm() {
  const [rating, setRating] = useState(0);

  function handleSelect(e) {
    const value = parseInt(e.target.value);
    setRating(value);
  }

  const options = [1, 2, 3, 4, 5];

  return (
    <div>
      <select value={rating} onChange={handleSelect}>
        <option value={0}>Numar credite</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <textarea value={`De plata: ${rating * 50} lei`} />
    </div>
    
  );
}


export default FeedbackForm;