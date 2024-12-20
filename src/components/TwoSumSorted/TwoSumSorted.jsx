import { useEffect, useState } from 'react';

// TODO: create basic interface to enter array and target
export default function TwoSumSorted() {
	const [targetFound, setTargetFound] = useState(false);

  // TODO: Separate logic from component.
	useEffect(() => {
		twoSumSorted();
	}, []);

	function twoSumSorted() {
		const sortedArray = [1, 2, 4, 6, 8, 9, 14, 15];
		const target = 13;
		let left = 0;
		let right = sortedArray.length - 1;

		while (left < right) {
			const pointersSum = sortedArray[left] + sortedArray[right];

			if (pointersSum > target) {
				right--;
				continue;
			}
			if (pointersSum < target) {
				left++;
				continue;
			}
			if (pointersSum === target) {
				setTargetFound(true);
				return;
			}
		}

		setTargetFound(false);
		return;
	}

	return (
		<div className='d-flex justify-content-center p-3 gap-3'>
			<span>[1, 2, 4, 6, 8, 9, 14, 15]</span>
			<span>Target = 13</span>
			<span>{targetFound ? 'Si suma' : 'No suma'}</span>
		</div>
	);
}
