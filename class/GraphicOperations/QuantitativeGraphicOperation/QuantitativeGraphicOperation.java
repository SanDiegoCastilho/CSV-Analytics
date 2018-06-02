import java.util.List;
import java.util.Map;
//Essa classe deve importar a classe GraphicOperations ques está na pasta QualitativeGraphicOperation
public abstract class QuantitativeGraphicOperation extends GraphicOperation{

	public QuantitativeGraphicOperation(String[] labels, List<Map> data){
		super(labels,data);
	}

	public abstract Object calculate();
}