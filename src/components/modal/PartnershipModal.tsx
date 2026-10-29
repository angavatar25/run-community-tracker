import { Button } from "@/components/ui/button"
import { useForm, Controller } from "react-hook-form"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Textarea } from "../ui/textarea"

const ContactChannel = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone" }
];

const PartnershipStatus = [
  { value: "new", label: "New" },
  { value: "contacted", label: "Contacted" },
  { value: "negotiating", label: "Negotiating" },
  { value: "closed", label: "Closed" },
  { value: "confirmed", label: "Confirmed" },
  { value: "rejected", label: "Rejected" },
];

function PartnershipModal({
  open,
  onChange,
  onClickSave
}: {
  open: boolean
  onChange: (open: boolean) => void,
  onClickSave: (data: any) => void,
}) {
  const { register, handleSubmit, control, reset } = useForm({
    defaultValues: {
      brandName: "",
      notes: "",
      messages: "",
      contactName: "",
      contactChannel: "email",
      collaborationType: "",
      ownerName: "",
      status: "pending",
    },
  })

  const onSubmit = (values: any) => {
    reset()
    onChange(false)
    onClickSave(values)
  }

  return (
    <Dialog open={open} onOpenChange={onChange}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] flex flex-col">
        <form onSubmit={handleSubmit(onSubmit, (e) => console.log("invalid", e))} className="flex flex-col min-h-0 gap-4">
          <DialogHeader>
            <DialogTitle>Add new partnership</DialogTitle>
            <DialogDescription>
              Add a new partnership by filling out the details below. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>

          <div className="overflow-y-auto pr-1">
            <FieldGroup className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel htmlFor="brand-name">Brand Name</FieldLabel>
                <Input
                  id="brand-name"
                  placeholder="Evil Rabbit"
                  {...register("brandName", { required: true })}
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="contact-channel">Contact Channel</FieldLabel>
                <Controller
                  name="contactChannel"
                  control={control}
                  render={({ field }) => (
                    <Select
                      value={field.value}
                      onValueChange={field.onChange}
                      items={ContactChannel}
                    >
                      <SelectTrigger id="contact-channel">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {ContactChannel.map((channel) => (
                            <SelectItem key={channel.value} value={channel.value}>
                              {channel.label}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="collaboration-type">Collaboration Type</FieldLabel>
                <Input
                  id="collaboration-type"
                  placeholder="Enter your collaboration type"
                  {...register("collaborationType", { required: true })}
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="owner-name">Owner Name</FieldLabel>
                <Input
                  id="owner-name"
                  placeholder="Enter the owner name"
                  {...register("ownerName", { required: true })}
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="partnership-status">Status</FieldLabel>
                <Controller
                  name="status"
                  control={control}
                  render={({ field }) => (
                    <Select
                      value={field.value}
                      onValueChange={field.onChange}
                      items={PartnershipStatus}
                    >
                      <SelectTrigger id="partnership-status">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {PartnershipStatus.map((status) => (
                            <SelectItem key={status.value} value={status.value}>
                              {status.label}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
              </Field>

              <FieldSet className="col-span-2">
                <Field>
                  <FieldLabel htmlFor="internal-notes">Notes</FieldLabel>
                  <Textarea
                    id="internal-notes"
                    placeholder="Add any internal notes"
                    className="resize-none"
                    {...register("notes", { required: true })}
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="message-optional">Message (Optional)</FieldLabel>
                  <Textarea
                    id="message-optional"
                    placeholder="Add any message (optional)"
                    className="resize-none"
                    {...register("messages")}
                  />
                </Field>
              </FieldSet>
            </FieldGroup>
          </div>

          <DialogFooter>
            <DialogClose render={<Button type="button" variant="outline" />}>
              Cancel
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default PartnershipModal;