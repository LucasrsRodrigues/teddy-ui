import type { StoryObj, Meta } from "@storybook/react";

import { Box, Pagination, PaginationProps } from "@teddy-ui/react";

export default {
  title: "Form/Pagination",
  component: Pagination,
  decorators: [
    (Story) => {
      return (
        <Box css={{ maxWidth: "300px" }}>
          {Story()}
        </Box>
      )
    }
  ],
  args: {
    totalItems: 120,
    itemsPerPage: 10,
    currentPage: 4,
    onPageChange: () => { },
  }
} as Meta<PaginationProps>;

export const Primary: StoryObj<PaginationProps> = {};