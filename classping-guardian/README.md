# ClassPing Guardian

Guardian-facing ClassPing portal for parents and authorized school administrators.

## Run locally

No installation is required. Open `index.html` directly, or run:

```bash
python3 -m http.server 4174
```

Then visit `http://localhost:4174`.

## Prototype accounts

| Role | Email | Password | Access |
| --- | --- | --- | --- |
| Administrator | `admin@classping.id` | `admin123` | Admin dashboard and optional parent preview |
| Parent | `parent@classping.id` | `parent123` | Alya's guardian pages only |

The account cards on the login page can also be selected to enter the corresponding demo view directly. Select **Ingat saya** to keep the session in local storage; otherwise the session lasts for the current browser tab.

The dashboard currently uses in-browser sample data and is ready to be connected to the ClassPing backend API.
