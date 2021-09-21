export function getClipboardData(
    e: React.ClipboardEvent<HTMLDivElement>,
  ): string {
    return e.clipboardData.getData('text/html');
}

export function renderToDiv(innerHtml: string): HTMLDivElement {
    const div = document.createElement('div');
    div.innerHTML = innerHtml;
    return div;
}

export function isTable(
    table: HTMLTableElement | null,
  ): table is HTMLTableElement {
    return table !== null;
}

export function findInderTable(div: HTMLDivElement): HTMLTableElement | null {
    return div.querySelector('table');
}

export function getInnerText(el: HTMLElement): string {
    return el.innerText;
}

export function getTableTdInnerText(table: HTMLTableElement | HTMLTableSectionElement): string[][] {
    const trs = table.querySelectorAll('tr');

    return [...trs]
        .map(tr => [...tr.querySelectorAll('th'), ...tr.querySelectorAll('td')].map(getInnerText))
        .filter(strArr => strArr.length > 0);
  }
  
  export function getTableThInnerText(table: HTMLTableElement | HTMLTableSectionElement): string[] {
    return [...table.querySelectorAll('th')].map(getInnerText);
}

export function parseTableToResult(table: HTMLTableElement) {
    const thead = table.querySelector('thead');
    const tbody = table.querySelector('tbody');

    const body = getTableTdInnerText(tbody || table);
    let head = getTableThInnerText(thead || table);
  
    if (body.length > 0 && head.length === 0) {
      head = Array(body[0].length).fill('');
    }
  
    return {
      body,
      head,
    };
}

export function tableToSJsonc(
    table: string[][], options: {name: number; type: number; comments: number}
): string {
    const {name, type, comments} = options;

    let result = '{\n';

    table.forEach(row => {
        const typeValue = row[type];
        const value = Number.isNaN(Number(typeValue)) ? `'${typeValue}'` : typeValue;
        const typeNameArr = row[name].split(/\s+/);
        if (typeNameArr.length === 0) { return }
        const [firstName, ...restName] = typeNameArr;

        const typeName = typeNameArr.length === 1 ? firstName : `${firstName}${restName.map((item) => {
            return `${item.slice(0,1).toLocaleUpperCase()}${item.slice(1)}`
        })}`;
        
        result += `\t"${typeName}": ${value}, // ${row[comments]} \n`;
    });

    result += '}'

    return result;
}