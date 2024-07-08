import { useState } from "react";

type DataType = number[];

// 정렬 전략 인터페이스
interface SortStrategy {
    sort: (data: DataType) => DataType;
}

// 버블 정렬 구현
class BubbleSort implements SortStrategy {
    sort(data: DataType) {
        const arr = [...data];
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }
        return arr;
    }
}

// 퀵 정렬 구현
class QuickSort implements SortStrategy {
    sort(data: DataType): DataType {
        if (data.length <= 1) return data;
        const pivot = data[0];
        const left = data.slice(1).filter(x => x < pivot);
        const right = data.slice(1).filter(x => x >= pivot);
        return [...this.sort(left), pivot, ...this.sort(right)];
    }
}

const SortContext = ({ strategy }: { strategy: SortStrategy }) => {
    const [data, setData] = useState([5, 3, 8, 1, 2, 7]);

    const handleSort = () => {
        const sortedData = strategy.sort(data);
        setData(sortedData);
    };

    return (
        <div>
            <h2>Data: {data.join(", ")}</h2>
            <button onClick={handleSort}>Sort</button>
        </div>
    )
}

export const SortApp = () => {
    const [strategy, setStrategy] = useState(new BubbleSort());

    const handleStrategyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedStrategy = e.target.value;
        if (selectedStrategy === "bubble") {
            setStrategy(new BubbleSort());
        } else if (selectedStrategy === "quick") {
            setStrategy(new QuickSort());
        }
    };

    return (
        <div>
            <h1>Sort Example with Strategy Pattern</h1>
            <select onChange={handleStrategyChange}>
                <option value="bubble">Bubble Sort</option>
                <option value="quick">Quick Sort</option>
            </select>
            <SortContext strategy={strategy} />
        </div>
    );
}


const bubbleSort = (data: DataType): DataType => {
    const arr = [...data];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

const quickSort = (data: DataType): DataType => {
    if (data.length <= 1) return data;
    const pivot = data[0];
    const left = data.slice(1).filter(x => x < pivot);
    const right = data.slice(1).filter(x => x >= pivot);
    return [...quickSort(left), pivot, ...quickSort(right)];
}

const SortContext2 = ({ strategy }: { strategy: 'bubble' | 'quick' }) => {
    const [data, setData] = useState([5, 3, 8, 1, 2, 7]);

    const handleSort = () => {
        if (strategy === 'bubble') {
            const sortedData = bubbleSort(data);
            setData(sortedData);
        } else if (strategy === 'quick') {
            const sortedData = quickSort(data);
            setData(sortedData);
        }
    };

    return (
        <div>
            <h2>Data: {data.join(", ")}</h2>
            <button onClick={handleSort}>Sort</button>
        </div>
    )
}

export const SortApp2 = () => {
    const [strategy, setStrategy] = useState<'bubble' | 'quick'>('bubble');

    const handleStrategyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedStrategy = e.target.value;
        if (selectedStrategy === "bubble") {
            setStrategy('bubble');
        } else if (selectedStrategy === "quick") {
            setStrategy('quick');
        }
    };

    return (
        <div>
            <h1>Sort Example with Strategy Pattern</h1>
            <select onChange={handleStrategyChange}>
                <option value="bubble">Bubble Sort</option>
                <option value="quick">Quick Sort</option>
            </select>
            <SortContext2 strategy={strategy} />
        </div>
    );
}