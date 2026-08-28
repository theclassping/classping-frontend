# ClassPing Frontend

ClassPing is split into two role-specific frontend applications:

- `classping-school/` — school portal for administrators and teachers.
- `classping-guardian/` — guardian portal for administrators and parents.

## Demo accounts

| Account | Email | Password | School | Guardian |
| --- | --- | --- | --- | --- |
| Administrator | `admin@classping.id` | `admin123` | Yes | Yes |
| Teacher — Nia Ramadhani | `nia@classping.id` | `guru123` | Yes | No |
| Parent — Rina Ramadhani | `parent@classping.id` | `parent123` | No | Yes |

## Run locally

From this directory:

```bash
python3 -m http.server 4175
```

Then open:

- School: `http://localhost:4175/classping-school/`
- Guardian: `http://localhost:4175/classping-guardian/`

Authentication is currently mocked in the browser and is ready to be replaced with the ClassPing backend JWT API.
