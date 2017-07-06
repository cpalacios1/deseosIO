import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from "../clases/listas";

@Pipe({
  name: 'pendientes',
  pure: false
})
export class PendientesPipe implements PipeTransform {
  transform(listas: Lista[], completadas: boolean): Lista[] {
    console.log("PendientesPipe");
    console.log(listas);
    console.log(completadas);
    return listas.filter((lista: Lista) => lista.terminado === completadas);
  }
}
