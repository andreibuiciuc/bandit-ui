import type { Meta, StoryObj } from '@storybook/vue3'
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableFooter, 
  TableHead,
  TableRow,
  TableCell,
  TableCaption
} from '../index'

type Story = StoryObj<typeof Table>

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

export const Default: Story = {
  render: () => ({
    components: { Table, TableCaption, TableBody, TableHeader, TableHead, TableRow, TableCell, TableFooter },
    setup: () => {
      return { invoices }
    },
    template: `
      <Table>
        <TableCaption>A list of your recent invoices</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead custom-class="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead custom-class="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="invoice in invoices" :key="invoice.invoice">
            <TableCell custom-class="font-medium">{{ invoice.invoice }}</TableCell>
            <TableCell>{{ invoice.paymentStatus }}</TableCell>
            <TableCell>{{ invoice.paymentMethod }}</TableCell>
            <TableCell custom-class="text-right">{{ invoice.totalAmount }}</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colspan="3">Total</TableCell>
            <TableCell custom-class="text-right">$2,500.00</TableCell>
          </TableRow>
        <TableFooter>
      </Table>
    `,
  })
}

const meta: Meta<typeof Table> = {
  component: Table
}

export default meta;