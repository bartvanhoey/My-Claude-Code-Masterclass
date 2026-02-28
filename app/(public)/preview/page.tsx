// preview page for newly created UI components
import Skeleton from "@/components/Skeleton"
import Avatar from "@/components/Avatar"

export default function PreviewPage() {
  return (
    <div className="page-content">
      <h2>Preview</h2>
      <div className="preview-grid">
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>

      <section>
        <h3>Avatar</h3>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <Avatar name="john" />
          <Avatar name="JohnDoe" />
          <Avatar name="BartVanHoey" />
          <Avatar name="Alice" />
        </div>
      </section>
    </div>
  )
}
