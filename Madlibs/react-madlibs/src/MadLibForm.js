import React, {useState} from 'react';
import MadLib from './Madlib';

const MadLibForm = () => {
    const INITIAL_STATE = {
        noun: "",
        adjective: "",
        verb: "",
        adverb: "",
        submitted: false
    };
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

 

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({
          ...formData,
          submitted: true,
        });
      };



return (
    <div>
      {formData.submitted ? (
        <MadLib {...formData} />
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="noun">Noun</label>
          <input
            id="noun"
            name="noun"
            value={formData.noun}
            onChange={handleChange}
            required
          />
          <label htmlFor="adjective">Adjective</label>
          <input
            id="adjective"
            name="adjective"
            value={formData.adjective}
            onChange={handleChange}
            required
          />
          <label htmlFor="verb">Verb</label>
          <input
            id="verb"
            name="verb"
            value={formData.verb}
            onChange={handleChange}
            required
          />
          <label htmlFor="adverb">Adverb</label>
          <input
            id="adverb"
            name="adverb"
            value={formData.adverb}
            onChange={handleChange}
            required
          />
          <button>Submit</button>
        </form>
      )}
    </div>
  );
};

export default MadLibForm;
