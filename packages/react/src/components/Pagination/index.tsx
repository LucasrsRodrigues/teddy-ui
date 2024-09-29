import { Button } from "../Button";
import { PaginationContainer, PaginationItem } from "./styles";

export interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}: PaginationProps) {
  // Calcula o total de páginas a partir do total de itens e itens por página
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;

  const getPaginationRange = () => {
    const range: (number | string)[] = []; // Array para armazenar os números de páginas e "..."
    const ellipsis = '...'; // Representação de omissão de páginas

    // Sempre adiciona a primeira página
    range.push(1);

    // Adiciona "..." se a página atual for maior que 3
    if (currentPage > 3) {
      range.push(ellipsis);
    }

    // Adiciona páginas ao redor da página atual
    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    for (let i = startPage; i <= endPage; i++) {
      range.push(i);
    }

    // Adiciona "..." e a última página se necessário
    if (totalPages > 5 && currentPage < totalPages - 2) {
      range.push(ellipsis);
    }

    // Adiciona a última página
    if (totalPages > 1) {
      range.push(totalPages);
    }

    return range; // Retorna a lista de páginas
  };

  const pages = getPaginationRange();

  return (
    <PaginationContainer>
      {pages.map((page, index) => (
        <PaginationItem
          key={index}
          onClick={() => typeof page === 'number' && onPageChange(page)}
          disabled={typeof page !== 'number'}
          active={currentPage === page}
        >
          {page}
        </PaginationItem>
      ))}
    </PaginationContainer>
  )
}



Pagination.displayName = "Pagination";