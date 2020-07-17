import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from 'src/store/actions';
import { FLAGS } from '../../helpers/constants';

export const Header = () => {
    const dispatch = useDispatch();
    const [currInput, SetCurrInput] = useState('');
    const [currTag, SetCurrTag] = useState(FLAGS.Work);

    const handleChancheInput = (e) => {
        SetCurrInput(e.target.value);
    };
    const handleChancheCheckbox = (e) => {
        SetCurrTag(e.target.value);
    };
    const handleAddItem = (input, tag) => {
        dispatch(addItem(input, tag));
        SetCurrInput('');
    };

    return (
        <>
            <select
                name=""
                value={currTag}
                id=""
                onChange={(event) => handleChancheCheckbox(event)}
            >
                {Object.keys(FLAGS).map((flag) => {
                    return (
                        <option key={FLAGS[flag]} value={FLAGS[flag]}>
                            {FLAGS[flag]}
                        </option>
                    );
                })}
            </select>
            <input
                value={currInput}
                onChange={(event) => handleChancheInput(event)}
                type="text"
            />
            <button
                type="button"
                onClick={() => handleAddItem(currInput, currTag)}
            >
                add item
            </button>
        </>
    );
};
