'use client';

export default function Button({text,fn,size}:ButtonType){
	const buttonSizes = {
		'large':'w-48 h-10 rounded-lg',
		'base':'w-36 h-10 rounded-md',
		'small':'w-24 h-10 text-sm rounded-md',
		'fill':'w-full h-full rounded-[inherit]'
	};

	return (
		<button 
		onClick={()=>{fn()}} 
		className={`${buttonSizes[size]} rounded-lg flex items-center justify-center bg-blue-700 text-white`}
		>
			{text}
		</button>
	);
}

interface ButtonType{
	text:string,
	fn: () => void | VoidFunction,
	size: 'large' | 'base' | 'small' | 'fill'
}