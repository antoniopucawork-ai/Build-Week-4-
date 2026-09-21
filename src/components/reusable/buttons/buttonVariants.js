import {
  UserPlus,
  Plus,
  Check,
  Pencil,
  X,
  SquareArrowOutUpRight,
  Ellipsis,
  Clock,
  MessageSquare,
} from "lucide-react";

export const BUTTON_VARIANT = {
  MAIN: {
    AVAILABLE: {
      label: "Disponibile per",
      icon: null,
      variant: "primary",
    },
    ADD_SECTION: {
      label: "Aggiungi sezione",
      icon: null,
      variant: "outline",
    },
    EHNANCE: {
      label: "Migliora profilo",
      icon: null,
      variant: "outline",
    },
    RESOURCE: {
      label: "Risorse",
      icon: null,
      variant: "outline-grey",
    },
    MESSAGE: {
      label: "Invia messaggio",
      icon: null,
      variant: "primary",
    },
    CREATE: {
      label: "Crea un post",
      icon: null,
      variant: "outline",
    },
    ADD_APP: {
      label: "Aggiungi app collegate",
      icon: null,
      variant: "outline",
    },
    CREDENTIAL: {
      label: "Mostra credenziale",
      icon: SquareArrowOutUpRight,
      variant: "outline-grey",
    },
    FOLLOWED: {
      label: "Già segui",
      icon: Check,
      variant: "outline-grey",
      actionType: "FOLLOW",
      status: "ACTIVE",
    },
    PENDING_CONNECTION: {
      label: "In sospeso",
      icon: Clock,
      variant: "outline-grey",
      actionType: "CONNECT",
      status: "PENDING",
    },
    CONNECTED: {
      label: "Messaggio",
      icon: MessageSquare,
      variant: "outline-grey",
      actionType: "CONNECT",
      status: "CONNECTED",
    },
  },
  ASIDE: {
    TRY: {
      label: "Prova gratis",
      icon: null,
      variant: "outline",
    },
    VIEW: {
      label: "Visualizza",
      icon: null,
      variant: "outline-grey",
    },
    CONNECT: {
      label: "Collegati",
      icon: UserPlus,
      variant: "outline-grey",
      actionType: "CONNECT",
      status: "IDLE",
    },
    FOLLOW: {
      label: "Segui",
      icon: Plus,
      variant: "outline-grey",
      actionType: "FOLLOW",
      status: "IDLE",
    },
  },
  MODAL: {
    SAVE: {
      label: "Salva",
      icon: null,
      variant: "primary",
    },
    ADD_SKILL: {
      label: "Aggiungi competenza",
      icon: Plus,
      variant: "outline",
    },
    ADD_MEDIA_CONTENT: {
      label: "Aggiungi contenuto multimediale",
      icon: Plus,
      variant: "outline",
    },
  },
  ICON_ONLY: {
    PLUS: {
      label: null,
      icon: Plus,
      variant: "icon-only",
    },
    EDIT: {
      label: null,
      icon: Pencil,
      variant: "icon-only",
    },
    DELETE: {
      label: null,
      icon: X,
      variant: "icon-only-outline",
    },
    COVER_IMAGE: {
      label: null,
      icon: Pencil,
      variant: "icon-only-secondary",
    },
    MORE: {
      label: null,
      icon: Ellipsis,
      variant: "icon-only-outline",
    },
  },
};
