import { useState } from 'react';
import './Palindrome.css';

export function Palindrome() {
	//TODO: Refactor to custom Hook
	const [palindrome, setPalindrome] = useState('');
	const [isPalindrome, setIsPalindrome] = useState(false);
	const [showAnswer, setShowAnswer] = useState(false);

	function handleOnClick() {
		setShowAnswer(true);
		const word = palindrome.split(' ').join('').toLowerCase();
		let left = 0;
		let right = word.length - 1;

		while (left < right) {
			if (word[left] !== word[right]) {
				setIsPalindrome(false);
				return;
			}
			left++;
			right--;
		}
		setIsPalindrome(true);
	}

	function handleInputChange(e) {
		setShowAnswer(false);
		setPalindrome(e.target.value);
	}
	function handleOnReset() {
		setIsPalindrome(false);
		setPalindrome('');
		setShowAnswer(false);
	}

	return (
		<div className='flex-block'>
			<div className='d-flex justify-content-center p-3 gap-3'>
				<input
					className='form-control'
					type='text'
					placeholder='Is it Palindrome?'
					value={palindrome}
					onChange={(e) => handleInputChange(e)}
				/>
				<button onClick={() => handleOnClick()} className='btn btn-primary'>
					Check
				</button>
				<button onClick={() => handleOnReset()} className='btn btn-secondary'>
					Reset
				</button>
			</div>
			<div className='answer'>
				{showAnswer ? <span>{isPalindrome ? 'It Is' : 'Is not'}</span> : ''}
			</div>
		</div>
	);
}
