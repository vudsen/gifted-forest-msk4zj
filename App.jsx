import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Skeleton,
} from "@heroui/react";

const TableSkeletons = ({ count = 4 }) => {
  return (
    <div className="mt-5 box-border w-full space-y-3">
      {Array.from({ length: count }).map((_, idx) => (
        <Skeleton className="rounded-lg" key={idx}>
          <div className="bg-default-300 h-10 w-full rounded-lg" />
        </Skeleton>
      ))}
    </div>
  );
};

export default function App() {
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>ROLE</TableColumn>
        <TableColumn>STATUS</TableColumn>
      </TableHeader>
      <TableBody items={[]} isLoading loadingContent={<TableSkeletons />}>
        {(item, index) => (
          <TableRow key={index}>
            <TableCell>Tony Reichert1</TableCell>
            <TableCell>CEO</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
